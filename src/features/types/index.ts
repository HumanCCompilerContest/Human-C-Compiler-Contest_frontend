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
