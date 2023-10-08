import { CoffeeCard } from './components/CoffeeCard'
import { BenefitsList } from './components/BenefitsList'
import { LimitExceededModal } from './components/LimitExceededModal'

import {
  HomeContainer,
  HeroContainer,
  HeroWrapper,
  Title,
  CoffeesContainer,
  CoffeesWrapper,
  Grid,
} from './styles'

import { coffees } from '@/data/coffees'

export function HomePage() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroWrapper>
          <div>
            <Title>
              <h1 data-aos="fade-up" data-aos-duration="1000">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p data-aos="fade-up" data-aos-duration="1400">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Title>

            <BenefitsList />
          </div>

          <img src="coffe-preview.png" alt="Visualização dos nossos cafés" />
        </HeroWrapper>
      </HeroContainer>

      <CoffeesContainer>
        <CoffeesWrapper>
          <h2>Nossos cafés</h2>

          <Grid>
            {coffees.map((coffee) => (
              <div key={coffee.id} data-aos="fade-up">
                <CoffeeCard coffee={coffee} />
              </div>
            ))}
          </Grid>
        </CoffeesWrapper>
      </CoffeesContainer>

      <LimitExceededModal />
    </HomeContainer>
  )
}
