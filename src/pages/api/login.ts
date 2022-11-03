import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { UserResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>,
) {
  const bodyName: string = req.body.name || ''
  const bodyPassword: string = req.body.password || ''
  const userName = 'hoge'
  const password = 'hoge'

  if (bodyName === userName && bodyPassword === password) {
    const data: UserResponse = {
      status: 'ok',
      errorMessage: '',
      user: {
        name: userName,
      },
    }
    res.setHeader('Set-Cookie', serialize('hccc', 'session-key', { path: '/' }))
    res.status(200).json(data)
  } else {
    const data: UserResponse = {
      status: 'ng',
      errorMessage: 'ユーザー名またはパスワードが異なります',
    }
    res.status(403).json(data)
  }
}
