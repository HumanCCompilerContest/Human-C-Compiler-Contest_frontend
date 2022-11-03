import Container from '@mui/material/Container'
import { createContext } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import { User } from '@/features/types'
import useAuth from '@/features/hooks/useAuth'

const AuthContext = createContext<User | undefined>(undefined)

type BasicLayoutProps = {
  children: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props

  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div>Is Loading...</div>
  }

  return (
    <AuthContext.Provider value={user}>
      <div style={{ height: '100%' }}>
        <Header />
        <Container sx={{ marginTop: '4rem' }}>{children}</Container>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default BasicLayout
