import {
  DetailsInfo,
  LimitExceededModalContainer,
  ModalContainer,
} from './styles'

import IllustrationCoffee from '@/assets/illustration-coffee.webp'

export function LimitExceededModal() {
  return (
    <LimitExceededModalContainer>
      <ModalContainer>
        <img src={IllustrationCoffee} alt="" />

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
