import { styled } from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-auto-flow: dense;
  gap: 1rem 0.75rem;

  & .cep {
    grid-column: span 3 / auto;
    max-width: 12.5rem;
  }

  & .street {
    grid-column: span 3 / auto;
  }

  & .complement {
    grid-column: span 2 / auto;
  }
`
