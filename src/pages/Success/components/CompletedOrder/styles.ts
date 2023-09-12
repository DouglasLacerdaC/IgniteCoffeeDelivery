import { styled } from 'styled-components'

export const CompletedOrderContainer = styled.div``

export const Title = styled.div`
  h1 {
    font: ${(props) => props.theme.fonts['title-l']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font: ${(props) => props.theme.fonts['text-l/400']};
  }
`
