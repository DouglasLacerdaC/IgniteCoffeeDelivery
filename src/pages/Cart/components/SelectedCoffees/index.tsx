import { useNavigate } from 'react-router-dom'

import { SelectedCoffeeCard } from './SelectedCoffeeCard'
import { useCart } from '@/hooks/useCart'

import {
  SelectedCoffeesContainer,
  BoxSelected,
  Divider,
  ConfirmOrderButton,
} from './styles'
import { PriceInfos } from './PriceInfos'

export function SelectedCoffees() {
  const navigate = useNavigate()

  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer data-aos="fade-up" data-aos-duration="1600">
      <h4>Cafés selecionados</h4>

      <BoxSelected>
        {cartItems.map((item) => (
          <>
            <SelectedCoffeeCard coffee={item} />
            <Divider />
          </>
        ))}

        <PriceInfos />

        <ConfirmOrderButton onClick={() => navigate('/success')}>
          Confirmar Pedido
        </ConfirmOrderButton>
      </BoxSelected>
    </SelectedCoffeesContainer>
  )
}
