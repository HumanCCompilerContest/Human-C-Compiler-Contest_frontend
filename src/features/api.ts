import useSWR from 'swr'

import { UNEXPECTED_NETWORK_ERROR_STATUS } from '@/features/const'
import { NetworkError } from '@/features/errors'
import {
  UserPost,
  UserResponse,
  ResponseBase,
  ProblemListResponse,
  ProblemResponse,
  RankingResponse,
  SubmissionPost,
  SubmissionJoinedUserResponse,
  SubmissionJoinedUserListResponse,
} from '@/features/types'

const Fetcher = async (path: string, options?: RequestInit): Promise<any> => {
  let res
  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
      ...options,
      credentials: 'include',
    })
  } catch (e: unknown) {
    // エラーログの出力
    console.error(e)

    if (e instanceof Error) {
      throw new NetworkError(e.message, UNEXPECTED_NETWORK_ERROR_STATUS)
    }

    throw new NetworkError('unexpected error', UNEXPECTED_NETWORK_ERROR_STATUS)
  }

  if (!res.ok) {
    /* 通信が完了したが、正しいリクエストではなかった場合のエラー（ステータスコードが2xxではない) */
    const error = new NetworkError(
      'An error occurred while fetching the data.',
      res.status,
    )
    throw error
  }

  return res.json()
}

export const useMe = () => {
  const { data, error } = useSWR<UserResponse, NetworkError>(
    `/api/users/me`,
    Fetcher,
    { revalidateOnFocus: false },
  )

  return {
    userResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useProblemList = () => {
  const { data, error } = useSWR<ProblemListResponse, NetworkError>(
    `/api/problems`,
    Fetcher,
  )

  return {
    problemListResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useProblem = (id: number) => {
  const { data, error } = useSWR<ProblemResponse, NetworkError>(
    `/api/problems/${id}`,
    Fetcher,
  )

  return {
    problemResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSubmissionList = (userID?: number, options?: any) => {
  const url =
    userID === undefined || isNaN(userID)
      ? `/api/submissions`
      : `/api/submissions?user_id=${userID}`
  const { data, error } = useSWR<
    SubmissionJoinedUserListResponse,
    NetworkError
  >(url, Fetcher, options)

  return {
    submissionListResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSubmission = (id: number, options?: any) => {
  const { data, error } = useSWR<SubmissionJoinedUserResponse, NetworkError>(
    !isNaN(id) && `/api/submissions/${id}`,
    Fetcher,
    options,
  )

  return {
    submissionResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useRanking = () => {
  const { data, error } = useSWR<RankingResponse, NetworkError>(
    `/api/ranking`,
    Fetcher,
  )

  return {
    rankingResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const requestLogin = async (data: UserPost): Promise<UserResponse> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return await Fetcher(`/api/login`, options)
}

export const requestRegister = async (
  data: UserPost,
): Promise<UserResponse> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return await Fetcher(`/api/register`, options)
}

export const requestLogout = async (): Promise<ResponseBase> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return await Fetcher(`/api/logout`, options)
}

export const requestSubmission = async (
  id: number,
  data: SubmissionPost,
): Promise<SubmissionJoinedUserResponse> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return await Fetcher(`/api/problems/${id}/submissions`, options)
}
