import { CreditCard, Bank, Money } from '@phosphor-icons/react'

import { Method, PaymentMethodsContainer } from './styles'

export function PaymentMethods() {
  const methods = [
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

  return (
    <PaymentMethodsContainer>
      {methods.map(({ value, label, icon: Icon }) => (
        <Method key={value}>
          <input type="radio" id="credito" value={value} />
          <label htmlFor="credito">
            <Icon size={18} />
            <span>{label}</span>
          </label>
        </Method>
      ))}
    </PaymentMethodsContainer>
  )
}
