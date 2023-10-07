import { keyframes, styled } from 'styled-components'

const AnimationAddNewItem = keyframes`
  0%, 100% {
    transform: scale(1);
  } 50% {
    transform: scale(0.7);
  }
`

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;

  z-index: 1000;

  &[data-scroll='active'] {
    background-color: ${(props) => props.theme.colors.white};
    padding: 0.75rem 2rem;

    transition: 0.2s ease;
  }

  &[data-scroll='disabled'] {
    background-color: transparent;
    padding: 2rem;

    transition: 0.2s ease;
  }
`

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

const Button = styled.button`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;
`

export const Location = styled(Button)`
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
    transition: 0.5s;
  }
`

export const Cart = styled(Button)`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  transition: 0.5s;

  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.white};
  }

  &.animation-add-item span {
    animation: ${() => AnimationAddNewItem} 1s;
  }

  & span {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;

    font: ${(props) => props.theme.fonts['text-xs']} !important;

    display: grid;
    place-items: center;

    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
  }
`
