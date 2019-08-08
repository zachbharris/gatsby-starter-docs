import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

const bodyFontColor = theme('mode', {
  light: `${props => props.theme.light.text}`,
  dark: `${props => props.theme.dark.text}`,
})

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${bodyFontColor};
    font-size: 16px;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.colors.primary}50;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover, &:focus {
      border-bottom-color: ${props => props.theme.colors.primary};
    }
  }
`

export default GlobalStyle
