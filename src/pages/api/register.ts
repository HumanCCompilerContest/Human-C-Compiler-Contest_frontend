import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

import { UserResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>,
) {
  const bodyName: string = req.body.name || ''
  const bodyPassword: string = req.body.password || ''
  if (!bodyName || !bodyPassword) {
    const data: UserResponse = {
      status: 'ng',
      errorMessage: 'ユーザー名またはパスワードが入力されていません',
    }
    res.status(200).json(data)
    return
  }

  res.setHeader('Set-Cookie', serialize('hccc', 'session-key', { path: '/' }))

  const data: UserResponse = {
    status: 'ok',
    errorMessage: '',
    user: {
      name: bodyName,
    },
  }
  res.status(200).json(data)
}
