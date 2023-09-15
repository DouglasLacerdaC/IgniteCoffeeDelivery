import { ElementType } from 'react'

import { IconUI, IconUIProps } from './styles'

interface IconProps extends IconUIProps {
  icon: ElementType
}

export function Icon({ icon: Icon, iconColor }: IconProps) {
  return (
    <IconUI iconColor={iconColor}>
      <Icon size={22} weight="fill" />
    </IconUI>
  )
}
