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

export function HomePage() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroWrapper>
          <div>
            <Title>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Title>

            <Items>
              <Item>
                <Icon iconColor="yellow-dark">
                  <ShoppingCart size={22} weight="fill" />
                </Icon>
                <span>Compra simples e segura</span>
              </Item>

              <Item>
                <Icon iconColor="base-text">
                  <Package size={22} weight="fill" />
                </Icon>
                <span>Embalagem mantém o café intacto</span>
              </Item>

              <Item>
                <Icon iconColor="yellow">
                  <Timer size={22} weight="fill" />
                </Icon>
                <span>Entrega rápida e rastreada</span>
              </Item>

              <Item>
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
            {Array.from({ length: 8 }).map((item, index) => (
              <CardCoffee key={index} />
            ))}
          </Grid>
        </CoffeesWrapper>
      </CoffeesContainer>
    </HomeContainer>
  )
}
