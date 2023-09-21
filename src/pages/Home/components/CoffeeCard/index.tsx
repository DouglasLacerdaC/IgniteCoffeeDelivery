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

interface CardCoffeeProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CardCoffeeProps) {
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
          <Counter />
          <Button>
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CardCoffeeContainer>
  )
}
