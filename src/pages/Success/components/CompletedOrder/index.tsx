import { Icon } from '@/components/Icon'
import { CompletedOrderContainer, Title, OrderInfo, Info } from './styles'
import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'

export function CompletedOrder() {
  return (
    <CompletedOrderContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <OrderInfo>
        <Info>
          <Icon icon={MapPin} iconColor="purple" />
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />{' '}
              Farrapos - Porto Alegre, RS
            </p>
          </div>
        </Info>

        <Info>
          <Icon icon={Clock} iconColor="yellow" />
          <div>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min </strong>
          </div>
        </Info>

        <Info>
          <Icon icon={CurrencyDollar} iconColor="yellow-dark" hasFill={false} />
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </Info>
      </OrderInfo>
    </CompletedOrderContainer>
  )
}
