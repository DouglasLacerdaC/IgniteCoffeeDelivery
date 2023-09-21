import { Icon } from '@/components/Icon'
import { BenefitsListContainer, Item } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function BenefitsList() {
  return (
    <BenefitsListContainer>
      <Item data-aos="fade-up" data-aos-duration="1600">
        <Icon iconColor="yellow-dark" icon={ShoppingCart} />
        <span>Compra simples e segura</span>
      </Item>

      <Item data-aos="fade-up" data-aos-duration="1800">
        <Icon iconColor="base-text" icon={Package} />
        <span>Embalagem mantém o café intacto</span>
      </Item>

      <Item data-aos="fade-up" data-aos-duration="2000">
        <Icon iconColor="yellow" icon={Timer} />
        <span>Entrega rápida e rastreada</span>
      </Item>

      <Item data-aos="fade-up" data-aos-duration="2200">
        <Icon iconColor="purple" icon={Coffee} />
        <span>O café chega fresquinho até você</span>
      </Item>
    </BenefitsListContainer>
  )
}
