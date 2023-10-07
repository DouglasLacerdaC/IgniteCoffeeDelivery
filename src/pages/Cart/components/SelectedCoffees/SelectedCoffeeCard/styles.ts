import { styled } from 'styled-components'

export const SelectedCoffeeCardContainer = styled.article`
  padding: 0.5rem 0.25rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 425px) {
    align-items: center;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  img {
    width: 4rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & span:first-child {
    max-width: 11.25rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveCoffeeButton = styled.button`
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fonts['button-m']};

  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const Price = styled.span`
  font: ${(props) => props.theme.fonts['title-s']};
`
