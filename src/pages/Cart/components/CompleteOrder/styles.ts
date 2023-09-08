import { styled } from 'styled-components'

export const CompleteOrderContainer = styled.div``

export const BoxContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-card']};

  &:last-child {
    margin-top: 0.75rem;
  }
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h4 {
    font: ${(props) => props.theme.fonts['title-s']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 2px;
  }

  p {
    font: ${(props) => props.theme.fonts['text-s']};
  }
`
