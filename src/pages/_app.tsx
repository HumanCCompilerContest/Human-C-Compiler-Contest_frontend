import CssBaseline from '@mui/material/CssBaseline'
import { orange } from '@mui/material/colors'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import type { AppProps } from 'next/app'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1929',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
