import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globals'
import { DarkTheme } from '../styles/Theme'

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={DarkTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
