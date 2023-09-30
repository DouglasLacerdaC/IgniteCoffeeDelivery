import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

import { CartContainer, FormWrapper } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const CompleteOrderFormSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod
    .number({
      required_error: 'Informe o número',
      invalid_type_error: 'Informe o número',
    })
    .min(1, 'Informe o número'),
  complement: zod.string().max(30, 'Limite de até 30 caracteres').optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.enum(['debito', 'credito', 'dinheiro'], {
    errorMap: () => ({ message: 'Selecione um método de pagamento' }),
  }),
})

export type CompleteOrderFormType = zod.infer<typeof CompleteOrderFormSchema>

export function CartPage() {
  const completeOrderForm = useForm<CompleteOrderFormType>({
    resolver: zodResolver(CompleteOrderFormSchema),
  })

  const { handleSubmit } = completeOrderForm

  function completeOrder(data: any) {
    console.log(data)
  }

  return (
    <CartContainer>
      <FormProvider {...completeOrderForm}>
        <form onSubmit={handleSubmit(completeOrder)}>
          <FormWrapper>
            <CompleteOrder />

            <SelectedCoffees />
          </FormWrapper>
        </form>
      </FormProvider>
    </CartContainer>
  )
}
