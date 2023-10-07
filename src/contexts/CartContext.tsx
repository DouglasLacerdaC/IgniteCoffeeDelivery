import { cartReducer } from '@/reducers/cart/reducer'
import {
  addItemToCartAction,
  clearCartAction,
  decreaseQuantityItemAction,
  increaseQuantityItemAction,
  removeItemFromCartAction,
  resetExceededQuantityAction,
} from '@/reducers/cart/actions'

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react'

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
  exceededQuantity: boolean
  resetExceededQuantity: () => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
      exceededQuantity: false,
    },
    (initialState) => {
      const cartItemsSavedStorage = localStorage.getItem('cart-data')

      if (cartItemsSavedStorage) {
        return JSON.parse(cartItemsSavedStorage)
      }

      return initialState
    },
  )

  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)

  const { cartItems, exceededQuantity } = cartState

  function addItemToCart(item: CoffeeCart) {
    dispatch(addItemToCartAction(item))
  }

  function decreaseQuantityItemCart(itemId: number) {
    dispatch(decreaseQuantityItemAction(itemId))
  }

  function increaseQuantityItemCart(itemId: number) {
    dispatch(increaseQuantityItemAction(itemId))
  }

  function removeItemFromCart(itemId: number) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function resetExceededQuantity() {
    dispatch(resetExceededQuantityAction())
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  useEffect(() => {
    setTotalCartPrice(() => {
      return cartItems.reduce((price, item) => {
        return (price += item.price * item.quantity)
      }, 0)
    })
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('cart-data', JSON.stringify(cartState))
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartPrice,
        addItemToCart,
        increaseQuantityItemCart,
        decreaseQuantityItemCart,
        removeItemFromCart,
        exceededQuantity,
        resetExceededQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
