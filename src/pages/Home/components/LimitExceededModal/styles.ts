import { styled } from 'styled-components'

export const LimitExceededModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00000060;
  z-index: 999999;

  transition: all 0.5s;

  &[data-open='opened'] {
    opacity: 1;
    visibility: visible;
  }

  &[data-open='closed'] {
    opacity: 0;
    visibility: hidden;
  }
`

export const ModalContainer = styled.div`
  position: relative;
  max-width: 32rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  padding: 4rem;

  img {
    width: 10rem;
  }

  transition: 0.2s;
  transition-delay: 0.1s;

  &[data-open='opened'] {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }

  &[data-open='closed'] {
    opacity: 0;
    transform: scale(1.5);
    filter: blur(10px);
  }
`

export const DetailsInfo = styled.div`
  h5 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors['purple-light']};
`
