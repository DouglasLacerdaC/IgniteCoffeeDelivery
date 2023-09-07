import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font: ${(props) => props.theme.fonts['text-m']};
    }
    
    h1, h2, h3, h4, h5, h6 {
        font: ${(props) => props.theme.fonts['title-l']};
    }

`
