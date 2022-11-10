import type { NextApiRequest, NextApiResponse } from 'next'

import { UserResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>,
) {
  if (req.cookies.hccc !== 'session-key') {
    const data: UserResponse = {
      status: 'ng',
      errorMessage: 'ログインしていません',
    }
    res.status(200).json(data)
    return
  }

  const data: UserResponse = {
    status: 'ok',
    errorMessage: '',
    user: {
      id: 1,
      name: 'hoge',
    },
  }
  res.status(200).json(data)
}
