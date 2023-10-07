import { CoffeeCart } from '@/contexts/CartContext'
import { ActionType } from './actions'

import { produce } from 'immer'

interface CartStateType {
  cartItems: CoffeeCart[]
  exceededQuantity: boolean
}

export function cartReducer(state: CartStateType, action: any) {
  if (action.type === ActionType.ADD_ITEM_TO_CART) {
    const existInCart = state.cartItems.find(
      (coffee) => coffee.id === action.payload.coffee.id,
    )

    const SUM_QUANTITY_COFFEE = existInCart
      ? existInCart.quantity + action.payload.coffee.quantity
      : 0

    if (!existInCart) {
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.coffee)
      })
    }

    if (existInCart && SUM_QUANTITY_COFFEE <= 5) {
      const currentItemCartIndex = state.cartItems.findIndex((item) => {
        return item.id === existInCart.id
      })

      return produce(state, (draft) => {
        draft.cartItems[currentItemCartIndex].quantity = SUM_QUANTITY_COFFEE
      })
    }

    return {
      ...state,
      exceededQuantity: true,
    }
  }

  if (action.type === ActionType.DECREASE_QUANTITY_ITEM) {
    const currentItemCartIndex = state.cartItems.findIndex((item) => {
      return item.id === action.payload.itemId
    })

    const currentItemCartData = state.cartItems[currentItemCartIndex]

    if (currentItemCartData?.quantity > 1) {
      return produce(state, (draft) => {
        draft.cartItems[currentItemCartIndex].quantity -= 1
      })
    }

    return state
  }

  if (action.type === ActionType.INCREASE_QUANTITY_ITEM) {
    const currentItemCartIndex = state.cartItems.findIndex((item) => {
      return item.id === action.payload.itemId
    })

    const currentItemCartData = state.cartItems[currentItemCartIndex]

    if (currentItemCartData?.quantity < 5) {
      return produce(state, (draft) => {
        draft.cartItems[currentItemCartIndex].quantity += 1
      })
    }

    return state
  }

  if (action.type === ActionType.REMOVE_ITEM_FROM_CART) {
    const newItemCart = state.cartItems.filter(
      (item) => item.id !== action.payload.itemId,
    )

    return produce(state, (draft) => {
      draft.cartItems = newItemCart
    })
  }

  if (action.type === ActionType.CLEAR_CART) {
    return produce(state, (draft) => {
      draft.cartItems = []
      draft.exceededQuantity = false
    })
  }

  if (action.type === ActionType.RESET_EXCEEDED_QUANTITY) {
    return produce(state, (draft) => {
      draft.exceededQuantity = false
    })
  }

  return state
}
