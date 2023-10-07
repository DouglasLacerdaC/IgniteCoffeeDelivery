import { Plus, Minus } from '@phosphor-icons/react'

import { CounterContainer } from './styles'

interface CounterProps {
  decreaseFunction: () => void
  increaseFunction: () => void
  quantity: number
}

export function Counter({
  increaseFunction,
  decreaseFunction,
  quantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button
        type="button"
        onClick={decreaseFunction}
        aria-label="Remover itens"
      >
        <Minus size={18} />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={increaseFunction}
        aria-label="Adicionar itens"
      >
        <Plus size={18} />
      </button>
    </CounterContainer>
  )
}
