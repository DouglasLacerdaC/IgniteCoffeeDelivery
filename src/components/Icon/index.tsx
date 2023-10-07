import { ElementType } from 'react'

import { ICON_COLORS, IconUI } from './styles'

type ColorType = keyof typeof ICON_COLORS
interface IconProps {
  icon: ElementType
  hasFill?: boolean
  iconColor: ColorType
}

export function Icon({ icon: Icon, iconColor, hasFill = true }: IconProps) {
  return (
    <IconUI $iconColor={iconColor}>
      <Icon size={22} weight={hasFill ? 'fill' : 'regular'} />
    </IconUI>
  )
}
