import { styled } from 'styled-components'

export const CartContainer = styled.main`
  padding: 10rem;
`

export const CartWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  h2 {
    font: ${(props) => props.theme.fonts['title-xs']};
    margin-bottom: 1rem;
  }
`

export const BoxContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['base-card']};
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h4 {
    font: ${(props) => props.theme.fonts['text-m']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 2px;
  }

  p {
    font: ${(props) => props.theme.fonts['text-s']};
  }
`

export const InputContainer = styled.fieldset`
  border: none;
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['base-input']};

  display: flex;
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

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-style: italic;
    font-size: 0.75rem;
  }
`
