import { styled } from 'styled-components'

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TextError = styled.span`
  font: ${(props) => props.theme.fonts['text-s']};
  color: red;
`

export const InputContainer = styled.fieldset`
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
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
    margin-right: 0.75rem;
  }
`
