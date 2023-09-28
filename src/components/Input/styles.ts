import { styled } from 'styled-components'

interface InputType {
  isOptional?: boolean
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TextError = styled.span`
  color: red;
  font: ${(props) => props.theme.fonts['text-s']};
`

export const InputContainer = styled.fieldset<InputType>`
  border: none;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-input']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: 0.5s;

  &.error,
  &.error:focus-within {
    border-color: red;
  }

  &:focus-within {
    border-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  input {
    width: 100%;
    background-color: transparent;
    font: ${(props) => props.theme.fonts['text-s']};
    outline: none;
    border: none;
    padding: 0.75rem 0 0.75rem 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
    margin-right: 0.75rem;
  }
`
