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
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer data-aos="fade-up" data-aos-duration="1600">
      <h4>Cafés selecionados</h4>

      <BoxSelected>
        {cartItems.map((item) => (
          <div key={item.id}>
            <SelectedCoffeeCard coffee={item} />
            <Divider />
          </div>
        ))}

        <PriceInfos />

        <ConfirmOrderButton disabled={!cartItems.length}>
          Confirmar Pedido
        </ConfirmOrderButton>
      </BoxSelected>
    </SelectedCoffeesContainer>
  )
}
