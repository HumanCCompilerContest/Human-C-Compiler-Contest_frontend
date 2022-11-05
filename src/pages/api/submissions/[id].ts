import type { NextApiRequest, NextApiResponse } from 'next'

import { SubmissionJoinedUserResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionJoinedUserResponse>,
) {
  const data: SubmissionJoinedUserResponse = {
    status: 'ok',
    errorMessage: '',
    submission: {
      id: 1,
      time: '2022/01/01',
      asem: 'stop',
      result: 'AC',
      user: {
        id: 1,
        name: 'karintou',
      },
    },
  }

  res.status(200).json(data)
}
