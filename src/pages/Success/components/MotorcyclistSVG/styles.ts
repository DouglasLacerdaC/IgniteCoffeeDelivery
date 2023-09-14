import { keyframes, styled } from 'styled-components'

const MotorcyclistMoveAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  } to {
    transform: translateX(200px) translateY(80px) rotate(-20deg);
    opacity: 0;
  }
`

export const Motorcyclist = styled.g`
  animation: ${MotorcyclistMoveAnimation} 2s
    cubic-bezier(0.51, 0.99, 0.71, -0.1) forwards;
  z-index: 100000;
`
