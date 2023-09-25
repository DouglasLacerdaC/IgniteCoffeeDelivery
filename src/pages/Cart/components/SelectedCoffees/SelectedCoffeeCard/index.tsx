import { Trash } from '@phosphor-icons/react'

import { Counter } from '@/pages/Home/components/Counter'

import {
  Actions,
  Details,
  Info,
  Price,
  RemoveCoffeeButton,
  SelectedCoffeeCardContainer,
} from './styles'

import { CoffeeCart } from '@/contexts/CartContext'
import { formatNumberForMoney } from '@/helpers/formatNumberForMoney'
import { useCart } from '@/hooks/useCart'

interface SelectedCoffeeCardProps {
  coffee: CoffeeCart
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
  const {
    increaseQuantityItemCart,
    decreaseQuantityItemCart,
    removeItemFromCart,
  } = useCart()

  function handleIncreaseQuantity() {
    increaseQuantityItemCart(coffee.id)
  }

  function handleDecreaseQuantity() {
    decreaseQuantityItemCart(coffee.id)
  }

  function handleRemoveItem() {
    removeItemFromCart(coffee.id)
  }

  return (
    <SelectedCoffeeCardContainer>
      <Info>
        <img src={coffee.imageUrl} />

        <Details>
          <span>{coffee.name}</span>

          <Actions>
            <Counter
              quantity={coffee.quantity}
              increaseFunction={handleIncreaseQuantity}
              decreaseFunction={handleDecreaseQuantity}
            />

            <RemoveCoffeeButton type="button" onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </RemoveCoffeeButton>
          </Actions>
        </Details>
      </Info>

      <Price>R$ {formatNumberForMoney(coffee.price * coffee.quantity)}</Price>
    </SelectedCoffeeCardContainer>
  )
}
