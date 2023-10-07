import { CreditCard, Bank, Money } from '@phosphor-icons/react'

import { Methods, PaymentMethod, PaymentMethodsContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { CompleteOrderFormType } from '@/pages/Cart'
import { TextError } from '@/components/TextField/styles'

export const methods = [
  {
    value: 'credito',
    label: 'Cartão de crédito',
    icon: CreditCard,
  },
  {
    value: 'debito',
    label: 'Cartão de débito',
    icon: Bank,
  },
  {
    value: 'dinheiro',
    label: 'Dinheiro',
    icon: Money,
  },
]

export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteOrderFormType>()

  return (
    <PaymentMethodsContainer>
      <Methods>
        {methods.map(({ value, label, icon: Icon }) => (
          <PaymentMethod key={value}>
            <input
              type="radio"
              id={value}
              value={value}
              {...register('paymentMethod')}
            />
            <label htmlFor={value}>
              <Icon size={18} />
              <span>{label}</span>
            </label>
          </PaymentMethod>
        ))}
      </Methods>
      <TextError>{errors.paymentMethod?.message}</TextError>
    </PaymentMethodsContainer>
  )
}
