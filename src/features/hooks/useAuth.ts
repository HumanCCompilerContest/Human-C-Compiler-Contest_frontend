import { useRouter } from 'next/router'
import { useState } from 'react'

import { useMe } from '@/features/api'
import useIsomorphicEffect from '@/features/hooks/useIsomorphicEffect'

const requireAuthPath: string[] = []

const useAuth = (redirectTo = '/login') => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { userResponse } = useMe()
  const isomorphicEffect = useIsomorphicEffect()

  isomorphicEffect(() => {
    if (!userResponse) return

    if (
      requireAuthPath.includes(router.pathname) &&
      redirectTo &&
      userResponse.status === 'ng'
    ) {
      router.push(redirectTo)
      return
    }
    setIsLoading(false)
  }, [userResponse, userResponse?.user, redirectTo])

  return { user: userResponse?.user, isLoading }
}

export default useAuth
