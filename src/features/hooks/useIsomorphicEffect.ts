import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicEffect = () => {
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect
}

export default useIsomorphicEffect
