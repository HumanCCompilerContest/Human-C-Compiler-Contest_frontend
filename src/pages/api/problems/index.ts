import type { NextApiRequest, NextApiResponse } from 'next'

import { ProblemListResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProblemListResponse>,
) {
  const problem = {
    id: 1,
    title: 'constant',
    statement: 'return 42',
    code: 'int main() {return 42;}',
    input_desc: 'no',
    output_desc: 'status code = 42',
    score: 100,
  }
  const data: ProblemListResponse = {
    status: 'ok',
    errorMessage: '',
    items: [],
  }
  for (let i = 0; i < 20; i++) {
    problem.id = i
    problem.title = `constant ver ${i}`
    data.items.push({ ...problem })
  }
  res.status(200).json(data)
}
