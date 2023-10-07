import { styled } from 'styled-components'

export const SuccessPageContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 10rem 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.375rem;
  align-items: end;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`
