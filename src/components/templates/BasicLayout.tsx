import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import { createContext } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import useAuth from '@/features/hooks/useAuth'
import { User } from '@/features/types'

export type AuthContextType = {
  user?: User
}
export const AuthContext = createContext<AuthContextType>({})

type BasicLayoutProps = {
  children: React.ReactNode
  isHome?: boolean
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, isHome = false } = props

  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

  return (
    <AuthContext.Provider value={{ user }}>
      <div style={{ height: '100%' }}>
        <Header />
        {isHome ? (
          children
        ) : (
          <Container sx={{ marginTop: '4rem', padding: '0 0.5rem' }}>
            {children}
          </Container>
        )}
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default BasicLayout
