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

import img from '@/assets/coffees/arabe.png'

export function SelectedCoffeeCard() {
  return (
    <SelectedCoffeeCardContainer>
      <Info>
        <img src={img} />

        <Details>
          <span>Expresso Tradicional</span>

          <Actions>
            <Counter />
            <RemoveCoffeeButton>
              <Trash size={16} />
              Remover
            </RemoveCoffeeButton>
          </Actions>
        </Details>
      </Info>

      <Price>R$ 9,90</Price>
    </SelectedCoffeeCardContainer>
  )
}
