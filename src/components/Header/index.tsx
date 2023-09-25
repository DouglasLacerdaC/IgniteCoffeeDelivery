import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import { useCart } from '@/hooks/useCart'

import {
  HeaderContainer,
  ActionsContainer,
  Wrapper,
  Location,
  Cart,
} from './styles'

import Logo from '@/assets/logo.svg'

export function Header() {
  const { cartItems } = useCart()

  return (
    <HeaderContainer data-aos="fade-down" data-aos-duration="1000">
      <Wrapper>
        <Link to="/">
          <img src={Logo} />
        </Link>

        <ActionsContainer>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
          <Link to="/cart">
            <Cart>
              <span>{cartItems.length}</span>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Link>
        </ActionsContainer>
      </Wrapper>
    </HeaderContainer>
  )
}
