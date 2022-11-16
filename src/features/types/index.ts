export type ResponseBase = {
  status: 'ok' | 'ng' | 'login-required' | 'forbidden'
  errorMessage: string
}

export type UserPost = {
  name: string
  password: string
}

export type User = {
  id: number
  name: string
}

export type UserResponse = ResponseBase & {
  user?: User
}

export type Problem = {
  id: number
  title: string
  statement: string
  code: string
  input_desc: string
  output_desc: string
  score: number
}

export type ProblemResponse = ResponseBase & {
  problem: Problem
}

export type ProblemListResponse = ResponseBase & {
  items: Problem[]
}

export type ProblesIsCorrect = Problem & {
  isCorrect?: boolean
}

export type Ranking = {
  rank: number
  userName: string
  score: number
}

export type RankingResponse = ResponseBase & {
  items: Ranking[]
}

export type Submission = {
  id: number
  time: string
  asm: string
  result: string
}

export type SubmissionJoined = Submission & {
  user: User
  problem: Problem
}

export type SubmissionJoinedUserResponse = ResponseBase & {
  submission: SubmissionJoined
}

export type SubmissionJoinedUserListResponse = ResponseBase & {
  items: SubmissionJoined[]
}

export type SubmissionPost = {
  asm: string
  isCE: boolean
}
