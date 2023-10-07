import { styled } from 'styled-components'

export const SelectedCoffeesContainer = styled.aside`
  h4 {
    font: ${(props) => props.theme.fonts['title-xs']};
    margin-bottom: 1rem;
  }
`

export const BoxSelected = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px;
`

export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme.colors.yellow};
  text-transform: uppercase;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  font: ${(props) => props.theme.fonts['button-g']};
  color: ${(props) => props.theme.colors.white};
  border: none;
  width: 100%;

  margin-top: 1.5rem;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
  }
`
