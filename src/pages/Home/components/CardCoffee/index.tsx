import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'

import {
  CardCoffeeContainer,
  Tags,
  Tag,
  Description,
  Actions,
  Buy,
  Price,
  Counter,
  Button,
} from './styles'

import { CoffeeType } from '@/data/coffees'

interface CardCoffeeProps {
  coffee: CoffeeType
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  return (
    <CardCoffeeContainer>
      <img src={coffee.imageUrl} />

      <Tags>
        {coffee.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Description>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </Description>

      <Buy>
        <Price>
          R$ <strong>{coffee.price}</strong>
        </Price>
        <Actions>
          <Counter>
            <button>
              <Minus size={18} />
            </button>
            <span>1</span>
            <button>
              <Plus size={18} />
            </button>
          </Counter>
          <Button>
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CardCoffeeContainer>
  )
}
