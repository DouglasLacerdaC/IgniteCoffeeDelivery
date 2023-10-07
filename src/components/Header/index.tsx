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
import { useEffect, useState } from 'react'

export function Header() {
  const { cartItems } = useCart()
  const [scrollActive, setScrollActive] = useState(false)
  const [activeAnimationCard, setActiveAnimationCard] = useState(false)

  function updateClassHeader() {
    setScrollActive(() => {
      if (window.scrollY >= 1) {
        return true
      }

      return false
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', updateClassHeader)

    return () => window.removeEventListener('scroll', updateClassHeader)
  }, [scrollActive])

  useEffect(() => {
    setActiveAnimationCard(true)

    setTimeout(() => {
      setActiveAnimationCard(false)
    }, 1000)
  }, [cartItems])

  return (
    <HeaderContainer
      data-scroll={scrollActive ? 'active' : 'disabled'}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Wrapper>
        <Link to="/">
          <img src={Logo} />
        </Link>

        <ActionsContainer>
          <Location>
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </Location>
          <Link to="/cart">
            <Cart
              className={activeAnimationCard ? 'animation-add-item' : ''}
              disabled={!cartItems.length}
            >
              <span>{cartItems.length}</span>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Link>
        </ActionsContainer>
      </Wrapper>
    </HeaderContainer>
  )
}
