import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'

import { useMe } from '@/features/api'

const excludeAuthPath = ['/', '/login', '/register']

const useAuth = (redirectTo = '/login') => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { userResponse } = useMe()

  useLayoutEffect(() => {
    if (!userResponse) return

    if (
      !excludeAuthPath.includes(router.pathname) &&
      redirectTo &&
      userResponse.status === 'ng'
    ) {
      router.push(redirectTo)
      return
    }
    setIsLoading(false)
  }, [userResponse, redirectTo])

  return { user: userResponse?.user, isLoading }
}

export default useAuth
