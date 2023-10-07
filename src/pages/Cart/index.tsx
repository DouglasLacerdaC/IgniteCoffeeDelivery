import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContainer, FormWrapper } from './styles'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/hooks/useCart'

const CompleteOrderFormSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-?\d{3}$/, { message: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod
    .number({
      required_error: 'Informe o número',
      invalid_type_error: 'Informe o número',
    })
    .min(1, 'Informe o número'),
  complement: zod
    .string()
    .refine((value) => value.length >= 15 || value.length === 0, {
      message:
        'Este campo é opcional, ou deve conter pelo menos 15 caracteres.',
    }),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().regex(/^[a-zA-Z]{2}$/, {
    message: 'Informe o UF',
  }),
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

  const { clearCart } = useCart()

  const navigate = useNavigate()

  function completeOrder(data: CompleteOrderFormType) {
    navigate('/success', {
      state: data,
    })

    clearCart()
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
