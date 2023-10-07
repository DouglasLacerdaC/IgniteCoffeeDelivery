import { ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CardCoffeeContainer,
  Tags,
  Tag,
  Description,
  Actions,
  Buy,
  Price,
  Button,
} from './styles'

import { CoffeeType } from '@/data/coffees'
import { Counter } from '../Counter'
import { formatNumberForMoney } from '@/helpers/formatNumberForMoney'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'

interface CardCoffeeProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CardCoffeeProps) {
  const [quantityCoffee, setQuantityCoffee] = useState<number>(1)

  const { addItemToCart } = useCart()

  function increaseQuantity() {
    setQuantityCoffee((state) => {
      if (state < 5) {
        return state + 1
      }

      return state
    })
  }

  function decreaseQuantity() {
    setQuantityCoffee((state) => {
      if (state > 1) {
        return state - 1
      }

      return state
    })
  }

  function addToCart() {
    addItemToCart({
      id: coffee.id,
      imageUrl: coffee.imageUrl,
      price: coffee.price,
      name: coffee.name,
      quantity: quantityCoffee,
    })
  }

  return (
    <CardCoffeeContainer>
      <img src={coffee.imageUrl} />

      <Tags>
        {coffee.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Description>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </Description>

      <Buy>
        <Price>
          R$ <strong>{formatNumberForMoney(coffee.price)}</strong>
        </Price>
        <Actions>
          <Counter
            quantity={quantityCoffee}
            decreaseFunction={decreaseQuantity}
            increaseFunction={increaseQuantity}
          />

          <Button onClick={addToCart} aria-label="Adicionar ao carrrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CardCoffeeContainer>
  )
}
