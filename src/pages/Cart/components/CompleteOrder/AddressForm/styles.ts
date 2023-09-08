import { styled } from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: dense;
  gap: 1rem 0.75rem;
`

export const Input = styled.fieldset`
  border: none;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-input']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: 0.5s;

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

  &.cpf {
    grid-column: span 3 / auto;
    max-width: 12.5rem;
  }

  &.street {
    grid-column: span 3 / auto;
  }

  &.complement {
    grid-column: span 2 / auto;
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
    margin-right: 0.75rem;
  }
`
