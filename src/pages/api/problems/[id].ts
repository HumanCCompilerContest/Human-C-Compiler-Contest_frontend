import type { NextApiRequest, NextApiResponse } from 'next'

import { ProblemResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProblemResponse>,
) {
  const data: ProblemResponse = {
    status: 'ok',
    errorMessage: '',
    problem: {
      title: 'constant',
      statement: 'return 42',
      code: 'int main() {return 42;}',
      input_desc: 'no',
      output_desc: 'status code = 42',
      score: 100,
    },
  }
  res.status(200).json(data)
}
