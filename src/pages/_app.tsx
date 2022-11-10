import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import AuthProvider from '@/components/contexts/AuthProvider'
import '../styles/global.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1929',
    },
    secondary: {
      main: '#f44336',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
