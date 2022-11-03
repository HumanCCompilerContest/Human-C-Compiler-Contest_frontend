import useSWR from 'swr'

import { UserPost, UserResponse, ResponseBase } from '@/features/types'

const MeFetcher = (url: string): Promise<UserResponse> => {
  return fetch(url).then((res) => res.json())
}

export const useMe = () => {
  const { data, error } = useSWR(`/api/users/me`, MeFetcher)

  return {
    userResponse: data,
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

export const requestLogout = async (): Promise<ResponseBase> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return fetch('/api/logout/', options).then((res) => res.json())
}
