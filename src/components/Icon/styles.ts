import { styled } from 'styled-components'

export const ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  'base-text': 'base-text',
} as const

interface IconUIProps {
  $iconColor: keyof typeof ICON_COLORS
}

export const IconUI = styled.span<IconUIProps>`
  min-height: 2.5rem;
  min-width: 2.5rem;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background-color: ${(props) => props.theme.colors[props.$iconColor]};
  color: ${(props) => props.theme.colors.white};
`
