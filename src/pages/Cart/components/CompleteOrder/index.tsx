import { MapPinLine, CurrencyDollarSimple } from '@phosphor-icons/react'

import { AddressForm } from './AddressForm'
import { PaymentMethods } from './PaymentMethods'

import { CompleteOrderContainer, Title, BoxContainer } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h2>Complete o seu pedido</h2>

      <BoxContainer>
        <Title>
          <MapPinLine size={28} />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Title>

        <AddressForm />
      </BoxContainer>

      <BoxContainer>
        <Title>
          <CurrencyDollarSimple size={28} />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Title>

        <PaymentMethods />
      </BoxContainer>
    </CompleteOrderContainer>
  )
}
