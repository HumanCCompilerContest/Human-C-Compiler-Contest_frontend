import Container from '@mui/material/Container'
import { createContext } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import { User } from '@/features/types'
import useAuth from '@/features/hooks/useAuth'

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
    return <div>Is Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ user }}>
      <div style={{ height: '100%' }}>
        <Header />
        {isHome ? (
          children
        ) : (
          <Container sx={{ marginTop: '4rem' }}>{children}</Container>
        )}
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default BasicLayout
