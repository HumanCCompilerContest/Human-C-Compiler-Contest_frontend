import type { NextApiRequest, NextApiResponse } from 'next'

import { ProblemListResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProblemListResponse>,
) {
  const data: ProblemListResponse = {
    status: 'ok',
    errorMessage: '',
    items: [
      {
        title: 'constant',
        statement: 'return 42',
        code: 'int main() {return 42;}',
        input_desc: 'no',
        output_desc: 'status code = 42',
        score: 100,
      },
      {
        title: 'constant',
        statement: 'return 42',
        code: 'int main() {return 42;}',
        input_desc: 'no',
        output_desc: 'status code = 42',
        score: 100,
      },
      {
        title: 'constant',
        statement: 'return 42',
        code: 'int main() {return 42;}',
        input_desc: 'no',
        output_desc: 'status code = 42',
        score: 100,
      },
      {
        title: 'constant',
        statement: 'return 42',
        code: 'int main() {return 42;}',
        input_desc: 'no',
        output_desc: 'status code = 42',
        score: 100,
      },
      {
        title: 'constant',
        statement: 'return 42',
        code: 'int main() {return 42;}',
        input_desc: 'no',
        output_desc: 'status code = 42',
        score: 100,
      },
    ],
  }
  res.status(200).json(data)
}
;``
