import { Container } from '@mui/material'
import { createContext } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

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

  return (
    <div style={{ height: '100%' }}>
      <Header />
      {isHome ? (
        children
      ) : (
        <Container sx={{ marginTop: '4rem', p: '0 0.5rem' }}>
          {children}
        </Container>
      )}
      <Footer />
    </div>
  )
}

export default BasicLayout
