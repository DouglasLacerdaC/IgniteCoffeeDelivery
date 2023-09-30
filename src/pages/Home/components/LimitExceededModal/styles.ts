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
`

export const ModalContainer = styled.div`
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
