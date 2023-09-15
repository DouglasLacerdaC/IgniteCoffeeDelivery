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
  border: double 1px transparent;

  border-image-slice: 1;
  border-radius: 6px 36px 6px;
  border-image-source: linear-gradient(#dbac2c, #8047f8);

  padding: 2.5rem;
`

export const Local = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Timer = styled.div``
export const Payment = styled.div``
