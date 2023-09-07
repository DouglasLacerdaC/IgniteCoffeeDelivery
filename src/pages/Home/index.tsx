import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { CardCoffee } from './components/CardCoffee'

import {
  HomeContainer,
  HeroContainer,
  HeroWrapper,
  Title,
  Items,
  Item,
  Icon,
  CoffeesContainer,
  CoffeesWrapper,
  Grid,
} from './styles'

import CoffePreviewImage from '@/assets/coffe-preview.png'
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

            <Items>
              <Item data-aos="fade-up" data-aos-duration="1600">
                <Icon iconColor="yellow-dark">
                  <ShoppingCart size={22} weight="fill" />
                </Icon>
                <span>Compra simples e segura</span>
              </Item>

              <Item data-aos="fade-up" data-aos-duration="1800">
                <Icon iconColor="base-text">
                  <Package size={22} weight="fill" />
                </Icon>
                <span>Embalagem mantém o café intacto</span>
              </Item>

              <Item data-aos="fade-up" data-aos-duration="2000">
                <Icon iconColor="yellow">
                  <Timer size={22} weight="fill" />
                </Icon>
                <span>Entrega rápida e rastreada</span>
              </Item>

              <Item data-aos="fade-up" data-aos-duration="2200">
                <Icon iconColor="purple">
                  <Coffee size={22} weight="fill" />
                </Icon>
                <span>O café chega fresquinho até você</span>
              </Item>
            </Items>
          </div>

          <img src={CoffePreviewImage} />
        </HeroWrapper>
      </HeroContainer>

      <CoffeesContainer>
        <CoffeesWrapper>
          <h2>Nossos cafés</h2>

          <Grid>
            {coffees.map((coffee) => (
              <div key={coffee.id} data-aos="fade-up">
                <CardCoffee coffee={coffee} />
              </div>
            ))}
          </Grid>
        </CoffeesWrapper>
      </CoffeesContainer>
    </HomeContainer>
  )
}
