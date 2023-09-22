import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SWRConfig } from 'swr'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import Loading from '@/components/atoms/Loading'
import AuthProvider from '@/components/contexts/AuthProvider'
import '@/styles/global.css'

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
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)

  useEffect(() => {
    // ページ遷移時にロード画面を表示する
    const handleStart = (url: string) =>
      url !== router.asPath && setIsPageLoading(true)
    const handleComplete = () => setIsPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
          {isPageLoading && <Loading />}
        </AuthProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
