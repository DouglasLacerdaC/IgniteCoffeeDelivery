import { SelectedCoffeeCard } from './SelectedCoffeeCard'

import {
  SelectedCoffeesContainer,
  BoxSelected,
  Divider,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <h4>Cafés selecionados</h4>

      <BoxSelected>
        {Array.from({ length: 3 }).map(() => (
          <>
            <SelectedCoffeeCard />
            <Divider />
          </>
        ))}

        <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
      </BoxSelected>
    </SelectedCoffeesContainer>
  )
}
