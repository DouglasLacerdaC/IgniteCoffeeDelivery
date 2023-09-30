import { ComponentProps, forwardRef } from 'react'
import { TextError, InputContainer, TextFieldContainer } from './styles'

import InputMask from 'react-input-mask'

interface TextFieldProps extends ComponentProps<'input'> {
  mask?: string
  textError: string | undefined
  isOptional?: boolean
}

// eslint-disable-next-line react/display-name
export const TextField = forwardRef<InputMask, TextFieldProps>(
  ({ mask, textError, isOptional = false, className, ...props }, ref) => {
    return (
      <TextFieldContainer className={className}>
        <InputContainer className={textError ? 'error' : ''}>
          <InputMask placeholder="CEP" {...props} mask={mask || ''} ref={ref} />
          {isOptional && <span>Opcional</span>}
        </InputContainer>
        {textError && <TextError>{textError}</TextError>}
      </TextFieldContainer>
    )
  },
)
