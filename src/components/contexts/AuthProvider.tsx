import Error from 'next/error'
import { createContext, ReactNode, useContext, FC } from 'react'

import Loading from '@/components/atoms/Loading'
import { UNEXPECTED_NETWORK_ERROR_STATUS } from '@/features/const'
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
    if (isError.status === UNEXPECTED_NETWORK_ERROR_STATUS) {
      return (
        <Error
          statusCode={isError.status}
          title={
            '予期せぬエラーが発生しました。しばらく時間が経った後、再度お試しください。'
          }
        />
      )
    }

    return <Error statusCode={isError.status} title={isError.message} />
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
