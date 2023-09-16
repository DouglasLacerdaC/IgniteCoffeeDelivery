import { useNavigate } from 'react-router-dom'
import { SelectedCoffeeCard } from './SelectedCoffeeCard'

import {
  SelectedCoffeesContainer,
  BoxSelected,
  Divider,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  const navigate = useNavigate()

  return (
    <SelectedCoffeesContainer data-aos="fade-up" data-aos-duration="1600">
      <h4>Cafés selecionados</h4>

      <BoxSelected>
        {Array.from({ length: 3 }).map(() => (
          <>
            <SelectedCoffeeCard />
            <Divider />
          </>
        ))}

        <ConfirmOrderButton onClick={() => navigate('/success')}>
          Confirmar Pedido
        </ConfirmOrderButton>
      </BoxSelected>
    </SelectedCoffeesContainer>
  )
}
