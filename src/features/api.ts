import useSWR from 'swr'

import { UserPost, UserResponse } from '@/features/types'

const MeFetcher = (url: string): Promise<UserResponse> => {
  return fetch(url).then((res) => res.json())
}

export const useMe = async () => {
  const { data, error } = useSWR(`/api/user/me`, MeFetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const requestLogin = async (data: UserPost): Promise<UserResponse> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetch('/api/login/', options).then((res) => res.json())
}
