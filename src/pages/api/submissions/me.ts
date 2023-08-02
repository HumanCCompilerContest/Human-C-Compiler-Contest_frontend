import type { NextApiRequest, NextApiResponse } from 'next'

import {
  SubmissionJoinedUserListResponse,
  SubmissionJoined,
} from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionJoinedUserListResponse>,
) {
  const submissionData: SubmissionJoined = {
    id: 1,
    time: '2022/01/01',
    asm: 'stop',
    result: 'AC',
    isCE: false,
    user: {
      id: 1,
      name: 'hoge',
    },
    problem: {
      id: 1,
      title: 'constant',
      statement: 'return 42',
      code: 'int main() {return 42;}',
      input_desc: 'no',
      output_desc: 'status code = 42',
      score: 100,
    },
  }
  const data: SubmissionJoinedUserListResponse = {
    status: 'ok',
    errorMessage: '',
    items: [],
  }
  for (let i = 0; i < 15; i++) {
    data.items.push(submissionData)
  }

  res.status(200).json(data)
}
