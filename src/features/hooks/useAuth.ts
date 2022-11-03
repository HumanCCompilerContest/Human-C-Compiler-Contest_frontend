import { useEffect, useState } from 'react'
import Router from 'next/router'

import { useMe } from '@/features/api'

const useAuth = (redirectTo = '/login') => {
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useMe()

  useEffect(() => {
    if (!redirectTo || !user) return

    if (redirectTo && user.status === 'ng') {
      Router.push(redirectTo)
      return
    }
    setIsLoading(false)
  }, [user, redirectTo])

  return { user, isLoading }
}

export default useAuth
