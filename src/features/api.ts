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
  ProblesIsCorrect,
} from '@/features/types'

const MeFetcher = (path: string): Promise<UserResponse> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`).then((res) =>
    res.json(),
  )
}

const ProblemListFetcher = (path: string): Promise<ProblemListResponse> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`).then((res) =>
    res.json(),
  )
}

const ProblemFetcher = (path: string): Promise<ProblemResponse> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`).then((res) =>
    res.json(),
  )
}

const RankingFetcher = (path: string): Promise<RankingResponse> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`).then((res) =>
    res.json(),
  )
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

export const useSubmissionList = (userID?: number, isSkip: boolean = false) => {
  const url = userID
    ? `/api/submissions/?user_id=${userID}`
    : `/api/submissions/`
  const { data, error } = useSWR(!isSkip && url, SubmissionListFetcher)

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
  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login/`,
    options,
  ).then((res) => res.json())
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
  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register/`,
    options,
  ).then((res) => res.json())
}

export const requestLogout = async (): Promise<ResponseBase> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logout/`,
    options,
  ).then((res) => res.json())
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
  return fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems/${id}/submissions/`,
    options,
  ).then((res) => res.json())
}

export const useProblemIsCorrectList = (userID?: number) => {
  const isSkip = userID === undefined
  const {
    problemListResponse,
    isLoading: isProblemLoading,
    isError: isProblemError,
  } = useProblemList()
  const {
    submissionListResponse,
    isLoading: isSubmissionLoading,
    isError: isSubmissionError,
  } = useSubmissionList(userID, isSkip)

  if (!userID) {
    // 非ログイン
    const data = problemListResponse?.items.map((v) => ({
      ...v,
      isCorrect: false,
    }))
    return {
      problemIsCorrectList: data,
      isLoading: isProblemLoading,
      isError: isProblemError,
    }
  }

  // ログイン済み
  if (isProblemLoading || isSubmissionLoading) {
    return {
      problemIsCorrectList: undefined,
      isLoading: true,
      isError: isProblemError || isSubmissionError,
    }
  }

  if (!problemListResponse || !submissionListResponse) {
    return {
      problemIsCorrectList: undefined,
      isLoading: false,
      isError: isProblemError || isSubmissionError,
    }
  }

  const problemIDsOfAC = submissionListResponse.items
    .filter((v) => v.result === 'AC')
    .map((v) => v.id)
  const data: ProblesIsCorrect[] = problemListResponse.items.map((v) => ({
    ...v,
    isCorrect: problemIDsOfAC.includes(v.id),
  }))

  return {
    problemIsCorrectList: data,
    isLoading: false,
    isError: undefined,
  }
}
