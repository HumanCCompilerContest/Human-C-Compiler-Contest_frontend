import type { NextApiRequest, NextApiResponse } from 'next'

import {
  SubmissionJoinedUserListResponse,
  SubmissionJoinedUser,
} from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionJoinedUserListResponse>,
) {
  const submissionData: SubmissionJoinedUser = {
    id: 1,
    time: '2022/01/01',
    asem: 'stop',
    result: 'AC',
    user: {
      id: 1,
      name: 'karintou',
    },
  }
  const data: SubmissionJoinedUserListResponse = {
    status: 'ok',
    errorMessage: '',
    items: [],
  }
  for (let i = 0; i < 30; i++) {
    data.items.push(submissionData)
  }

  res.status(200).json(data)
}
