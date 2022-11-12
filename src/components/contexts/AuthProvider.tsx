import { createContext, ReactNode, useContext, FC } from 'react'
import Error from 'next/error'

import Loading from '@/components/atoms/Loading'
import useAuth from '@/features/hooks/useAuth'
import { User } from '@/features/types'

export type AuthContextType = {
  user?: User
}

type AuthProviderProps = {
  children?: ReactNode
}

const AuthContext = createContext<AuthContextType>({})

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { user, isLoading, isError } = useAuth()

  if (isError) {
    return <Error statusCode={500} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider
