import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import {
  HeaderContainer,
  ActionsContainer,
  Wrapper,
  Location,
  Cart,
} from './styles'
import Logo from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <img src={Logo} />

        <ActionsContainer>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
          <Cart>
            <span>3</span>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </ActionsContainer>
      </Wrapper>
    </HeaderContainer>
  )
}
