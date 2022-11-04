export type ResponseBase = {
  status: 'ok' | 'ng'
  errorMessage: string
}

export type UserPost = {
  name: string
  password: string
}

export type User = {
  name: string
}

export type UserResponse = ResponseBase & {
  user?: User
}

export type Problem = {
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
