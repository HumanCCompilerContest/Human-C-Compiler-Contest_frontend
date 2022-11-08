import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import Loading from '@/components/atoms/Loading'
import { AuthContext } from '@/components/templates/BasicLayout'
import useAuth from '@/features/hooks/useAuth'
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
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ user }}>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
