import { formatNumberForMoney } from '@/helpers/formatNumberForMoney'
import { Info, PriceInfosContainer, TotalPrice } from './styles'
import { useCart } from '@/hooks/useCart'

const PRICE_DELIVERY = 3.5

export function PriceInfos() {
  const { totalCartPrice } = useCart()

  return (
    <PriceInfosContainer>
      <Info>
        <span>Total de itens</span>
        <span>R$ {formatNumberForMoney(totalCartPrice)}</span>
      </Info>

      <Info>
        <span>Entrega</span>
        <span>R$ {formatNumberForMoney(PRICE_DELIVERY)}</span>
      </Info>

      <TotalPrice>
        <span>Total</span>
        <span>R$ {formatNumberForMoney(totalCartPrice + PRICE_DELIVERY)}</span>
      </TotalPrice>
    </PriceInfosContainer>
  )
}
