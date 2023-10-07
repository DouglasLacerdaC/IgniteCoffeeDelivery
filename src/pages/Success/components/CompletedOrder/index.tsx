import { Icon } from '@/components/Icon'
import { CompletedOrderContainer, Title, OrderInfo, Info } from './styles'
import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { methods } from '@/pages/Cart/components/CompleteOrder/PaymentMethods'
import { CompleteOrderFormType } from '@/pages/Cart'

interface LocationRouterType {
  state: CompleteOrderFormType
}

export function CompletedOrder() {
  const { state } = useLocation() as LocationRouterType
  const navigate = useNavigate()

  const methodLabel = methods.find((method) => {
    return method.value === state.paymentMethod
  })?.label

  return (
    <CompletedOrderContainer data-aos="fade-up" data-aos-duration="1000">
      <Title>
        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Uhu! Pedido confirmado
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Title>

      <OrderInfo>
        <Info>
          <Icon icon={MapPin} iconColor="purple" />
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>{' '}
              <br /> Farrapos - Porto Alegre, RS
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
            <strong>{methodLabel}</strong>
          </div>
        </Info>
      </OrderInfo>
    </CompletedOrderContainer>
  )
}
