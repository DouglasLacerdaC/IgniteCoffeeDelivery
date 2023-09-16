import { ElementType } from 'react'

import { IconUI, IconUIProps } from './styles'

interface IconProps extends IconUIProps {
  icon: ElementType
  hasFill?: boolean
}

export function Icon({ icon: Icon, iconColor, hasFill = true }: IconProps) {
  return (
    <IconUI iconColor={iconColor}>
      <Icon size={22} weight={hasFill ? 'fill' : 'regular'} />
    </IconUI>
  )
}
