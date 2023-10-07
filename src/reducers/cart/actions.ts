import { CoffeeCart } from '@/contexts/CartContext'

export enum ActionType {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DECREASE_QUANTITY_ITEM = 'DECREASE_QUANTITY_ITEM',
  INCREASE_QUANTITY_ITEM = 'INCREASE_QUANTITY_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
  RESET_EXCEEDED_QUANTITY = 'RESET_EXCEEDED_QUANTITY',
}

export function addItemToCartAction(coffee: CoffeeCart) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function decreaseQuantityItemAction(itemId: number) {
  return {
    type: ActionType.DECREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}

export function increaseQuantityItemAction(itemId: number) {
  return {
    type: ActionType.INCREASE_QUANTITY_ITEM,
    payload: {
      itemId,
    },
  }
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function resetExceededQuantityAction() {
  return {
    type: ActionType.RESET_EXCEEDED_QUANTITY,
  }
}

export function clearCartAction() {
  return {
    type: ActionType.CLEAR_CART,
  }
}
