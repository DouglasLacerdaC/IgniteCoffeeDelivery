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

const CompletedOrderOpacityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

const MoveSmokeAnimation = keyframes`
  from {
    transform: translateX(0);
    
  } to {
    transform: translateX(160px);
    opacity: 0;
  }
`

export const MotorcyclistAnimation = styled.g`
  animation: ${MotorcyclistMoveAnimation} 2s
    cubic-bezier(0.51, 0.99, 0.71, -0.1) forwards;
  z-index: 100000;
`

export const CompletedOrderAnimation = styled.g`
  opacity: 0;
  animation: ${CompletedOrderOpacityAnimation} 2s 2.6s forwards;
`

export const Smoke1 = styled.path`
  animation: ${MoveSmokeAnimation} 2.2s cubic-bezier(0, 1.09, 1, -1.45) forwards;
`

export const Smoke2 = styled.path`
  animation: ${MoveSmokeAnimation} 2.4s cubic-bezier(0, 1.09, 1, -1.45) forwards;
`

export const Smoke3 = styled.path`
  animation: ${MoveSmokeAnimation} 2.6s cubic-bezier(0, 1.09, 1, -1.45) forwards;
`
