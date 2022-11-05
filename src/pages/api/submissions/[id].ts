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
      asem: 'mov rax, 1\nmov rax, 1\nmov rax, 1\nmov rax, 1\nmov rax, 1',
      result: 'AC',
      user: {
        id: 1,
        name: 'karintou',
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
    },
  }

  res.status(200).json(data)
}
