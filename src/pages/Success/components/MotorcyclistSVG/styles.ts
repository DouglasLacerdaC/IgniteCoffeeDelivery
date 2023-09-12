import { keyframes, styled } from 'styled-components'

const MotorcyclistMoveAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  } to {
    transform: translateX(300px);
    opacity: 0;
  }
`

export const Motorcyclist = styled.g`
  animation: ${MotorcyclistMoveAnimation} 2s forwards;
  z-index: 100000;
`
