import { useCart } from '@/hooks/useCart'
import {
  ButtonClose,
  DetailsInfo,
  LimitExceededModalContainer,
  ModalContainer,
} from './styles'

import { X } from '@phosphor-icons/react'

export function LimitExceededModal() {
  const { exceededQuantity, resetExceededQuantity } = useCart()

  return (
    <LimitExceededModalContainer
      data-open={exceededQuantity ? 'opened' : 'closed'}
    >
      <ModalContainer data-open={exceededQuantity ? 'opened' : 'closed'}>
        <ButtonClose onClick={resetExceededQuantity}>
          <X />
        </ButtonClose>
        <img src="illustration-coffee.webp" alt="" />

        <DetailsInfo>
          <h5>Limite de cafés excedido!</h5>
          <p>
            Possívelmente você gosta muito da gente, porém o limite por café é
            de apenas 5 por compra.
          </p>
        </DetailsInfo>
      </ModalContainer>
    </LimitExceededModalContainer>
  )
}
