import { CompletedOrder } from './components/CompletedOrder'
import { MotorcyclistSVG } from './components/MotorcyclistSVG'

import { SuccessPageContainer } from './styles'

export function SuccessPage() {
  return (
    <SuccessPageContainer>
      <CompletedOrder />
      <MotorcyclistSVG />
    </SuccessPageContainer>
  )
}
