import { ReactNode, createContext, useState, useEffect } from 'react'

export interface CoffeeCart {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartContextType {
  cartItems: CoffeeCart[]
  totalCartPrice: number
  addItemToCart: (coffee: CoffeeCart) => void
  increaseQuantityItemCart: (itemId: number) => void
  decreaseQuantityItemCart: (itemId: number) => void
  removeItemFromCart: (itemId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState([] as CoffeeCart[])
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)

  function addItemToCart(item: CoffeeCart) {
    setCartItems((state) => {
      const existInCart = state.find((coffee) => coffee.id === item.id)
      const SUM_QUANTITY_COFFEE = existInCart
        ? existInCart.quantity + item.quantity
        : 0

      if (!existInCart) {
        return [...state, item]
      }

      if (existInCart && SUM_QUANTITY_COFFEE <= 5) {
        return state.map((coffee) => {
          if (coffee.id === existInCart.id) {
            return { ...coffee, quantity: SUM_QUANTITY_COFFEE }
          }

          return coffee
        })
      }

      return state
    })
  }

  function decreaseQuantityItemCart(itemId: number) {
    setCartItems((state) => {
      return state.map((coffee) => {
        if (coffee.id === itemId && coffee.quantity > 1) {
          return { ...coffee, quantity: coffee.quantity - 1 }
        }

        return coffee
      })
    })
  }

  function increaseQuantityItemCart(itemId: number) {
    setCartItems((state) => {
      return state.map((coffee) => {
        if (coffee.id === itemId && coffee.quantity < 5) {
          return { ...coffee, quantity: coffee.quantity + 1 }
        }

        return coffee
      })
    })
  }

  function removeItemFromCart(itemId: number) {
    setCartItems((state) => {
      return state.filter((coffee) => coffee.id !== itemId)
    })
  }

  useEffect(() => {
    setTotalCartPrice((state) => {
      return cartItems.reduce((price, item) => {
        return (price += item.price * item.quantity)
      }, 0)
    })
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartPrice,
        addItemToCart,
        increaseQuantityItemCart,
        decreaseQuantityItemCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
