import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { UserResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>,
) {
  res.setHeader('Set-Cookie', serialize('hccc', '', { path: '/', maxAge: -1 }))

  const data: UserResponse = {
    status: 'ok',
    errorMessage: '',
  }
  res.status(200).json(data)
}
