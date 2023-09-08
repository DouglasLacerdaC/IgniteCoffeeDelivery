import { Plus, Minus } from '@phosphor-icons/react'

import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={18} />
      </button>
      <span>1</span>
      <button>
        <Plus size={18} />
      </button>
    </CounterContainer>
  )
}
