import { styled } from 'styled-components'
import BackgroundImage from '@/assets/background.png'

export const HomeContainer = styled.main``

const Wrapper = styled.div`
  width: 70rem;
  margin: 0 auto;
`

// -------------------------------------- //
//                  HERO
// -------------------------------------- //

export const HeroWrapper = styled(Wrapper)`
  display: flex;
  gap: 2rem;
`

export const HeroContainer = styled.section`
  width: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 10rem 0;
`

export const Title = styled.div`
  margin-bottom: 4rem;

  h1,
  h2 {
    font: ${(props) => props.theme.fonts['title-xl']};
    margin-bottom: 1rem;
  }

  h2 {
    font: ${(props) => props.theme.fonts['title-l']};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font: ${(props) => props.theme.fonts['text-l/400']};
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  gap: 1.25rem 0;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  'base-text': 'base-text',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const Icon = styled.span<IconProps>`
  height: 2.5rem;
  width: 2.5rem;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background-color: ${(props) => props.theme.colors[props.iconColor]};
  color: ${(props) => props.theme.colors.white};
`

// -------------------------------------- //
//                  COFFEES
// -------------------------------------- //

export const CoffeesContainer = styled.section`
  padding: 2rem 0;
`

export const CoffeesWrapper = styled(Wrapper)`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 3.5rem;
`