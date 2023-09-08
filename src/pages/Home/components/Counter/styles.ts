import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 2px;

    display: flex;
    align-items: center;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
