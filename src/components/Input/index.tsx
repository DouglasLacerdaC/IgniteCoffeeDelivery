import { ComponentElement, ComponentProps } from 'react'
import { InputWrapper, TextError, InputContainer } from './styles'

interface InputProps extends ComponentProps<> {}

export function Input() {
  return (
    <InputWrapper>
      <InputContainer>
        <input placeholder="CEP" />
      </InputContainer>
      <TextError></TextError>
    </InputWrapper>
  )
}
