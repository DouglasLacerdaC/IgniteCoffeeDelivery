import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

import { CartContainer, FormWrapper } from './styles'

export function CartPage() {
  return (
    <CartContainer>
      <form action="">
        <FormWrapper>
          <CompleteOrder />

          <SelectedCoffees />
        </FormWrapper>
      </form>
    </CartContainer>
  )
}
