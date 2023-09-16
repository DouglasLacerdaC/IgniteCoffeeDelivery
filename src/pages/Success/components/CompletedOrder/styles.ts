import { styled } from 'styled-components'

export const CompletedOrderContainer = styled.div``

export const Title = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font: ${(props) => props.theme.fonts['title-l']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font: ${(props) => props.theme.fonts['text-l/400']};
  }
`

export const OrderInfo = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  border: solid 1px transparent;

  border-image-slice: 1;
  border-radius: 6px 36px 6px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(100deg, #dbac2c, #8047f8);
    z-index: -1;
    border-radius: 6px 36px 6px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
