import { defaultTheme } from '../styles/theme/default'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
