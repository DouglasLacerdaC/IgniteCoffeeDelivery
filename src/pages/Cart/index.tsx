import { MapPinLine } from '@phosphor-icons/react'

import {
  CartContainer,
  CartWrapper,
  BoxContainer,
  Title,
  InputContainer,
} from './styles'

export function CartPage() {
  return (
    <CartContainer>
      <CartWrapper>
        <h2>Complete o seu pedido</h2>

        <form action="">
          <BoxContainer>
            <Title>
              <MapPinLine size={28} />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Title>

            <InputContainer>
              <input placeholder="CPF" />
              <span>Opcional</span>
            </InputContainer>
          </BoxContainer>
        </form>
      </CartWrapper>
    </CartContainer>
  )
}
