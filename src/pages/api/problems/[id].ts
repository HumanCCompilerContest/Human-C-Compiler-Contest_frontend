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
      id: 1,
      title: 'constant',
      statement: '42を返すコードをコンパイルしてください',
      code: 'int main() {\n . return 42;\n}',
      input_desc: 'なし',
      output_desc: 'ステータスコードで42を返すようにしてください',
      score: 100,
    },
  }
  res.status(200).json(data)
}
