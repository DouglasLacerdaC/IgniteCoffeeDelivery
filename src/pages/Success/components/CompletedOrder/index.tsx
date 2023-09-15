import { Icon } from '@/components/Icon'
import { CompletedOrderContainer, Title, OrderInfo, Local } from './styles'
import { MapPin } from '@phosphor-icons/react'

export function CompletedOrder() {
  return (
    <CompletedOrderContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <OrderInfo>
        <Local>
          <Icon icon={MapPin} iconColor="purple" />
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos
            - Porto Alegre, RS
          </p>
        </Local>
      </OrderInfo>
    </CompletedOrderContainer>
  )
}
