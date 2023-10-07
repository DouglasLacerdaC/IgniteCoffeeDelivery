import { styled } from 'styled-components'

export const BenefitsListContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  gap: 1.25rem 0;

  @media (max-width: 975px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
