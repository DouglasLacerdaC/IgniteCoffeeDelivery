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
  background-attachment: fixed;

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

// -------------------------------------- //
//                  COFFEES
// -------------------------------------- //

export const CoffeesContainer = styled.section`
  padding: 2rem 0;
`

export const CoffeesWrapper = styled(Wrapper)``

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 3.5rem;
`
