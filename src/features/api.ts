import useSWR from 'swr'

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

const MeFetcher = (url: string): Promise<UserResponse> => {
  return fetch(url).then((res) => res.json())
}

const ProblemListFetcher = (url: string): Promise<ProblemListResponse> => {
  return fetch(url).then((res) => res.json())
}

const ProblemFetcher = (url: string): Promise<ProblemResponse> => {
  return fetch(url).then((res) => res.json())
}

const RankingFetcher = (url: string): Promise<RankingResponse> => {
  return fetch(url).then((res) => res.json())
}

const SubmissionFetcher = (
  url: string,
): Promise<SubmissionJoinedUserResponse> => {
  return fetch(url).then((res) => res.json())
}

const SubmissionListFetcher = (
  url: string,
): Promise<SubmissionJoinedUserListResponse> => {
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

export const useProblemList = () => {
  const { data, error } = useSWR(`/api/problems/`, ProblemListFetcher)

  return {
    problemListResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useProblem = (id: number) => {
  const { data, error } = useSWR(`/api/problems/${id}`, ProblemFetcher)

  return {
    problemResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSubmissionList = () => {
  const { data, error } = useSWR(`/api/submissions/`, SubmissionListFetcher)

  return {
    submissionListResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSubmission = (id: number) => {
  const { data, error } = useSWR(`/api/submissions/${id}`, SubmissionFetcher)

  return {
    submissionResponse: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useRanking = () => {
  const { data, error } = useSWR(`/api/ranking/`, RankingFetcher)

  return {
    rankingResponse: data,
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

export const requestRegister = async (
  data: UserPost,
): Promise<UserResponse> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetch('/api/register/', options).then((res) => res.json())
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

export const requestSubmission = async (
  id: number,
  data: SubmissionPost,
): Promise<SubmissionJoinedUserResponse> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetch(`/api/problems/${id}/submissions`, options).then((res) =>
    res.json(),
  )
}
