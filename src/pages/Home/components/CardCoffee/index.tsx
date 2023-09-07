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

import CoffeChocolate from '@/assets/coffees/chocolate-quente.png'

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src={CoffeChocolate} />

      <Tags>
        <Tag>Expresso</Tag>
        <Tag>Com leite</Tag>
        <Tag>Tradicional</Tag>
      </Tags>

      <Description>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Description>

      <Buy>
        <Price>
          R$ <strong>9,90</strong>
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
