import { styled } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Methods = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethod = styled.div`
  width: 100%;

  input {
    display: none;
  }

  label {
    padding: 1rem;
    background-color: ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-transform: uppercase;
    font: ${(props) => props.theme.fonts['button-m']};

    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors['base-hover']};
    }

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }

  input[type='radio']:checked ~ label {
    background-color: ${(props) => props.theme.colors['purple-light']};
    border-color: ${(props) => props.theme.colors.purple};
  }
`
