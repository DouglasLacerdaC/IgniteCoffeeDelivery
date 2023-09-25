import { styled } from 'styled-components'

export const PriceInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font: ${(props) => props.theme.fonts['text-s']};
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font: ${(props) => props.theme.fonts['text-l/700']};
`
