import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />

          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
