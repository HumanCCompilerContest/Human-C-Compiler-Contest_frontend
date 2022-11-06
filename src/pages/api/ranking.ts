import type { NextApiRequest, NextApiResponse } from 'next'

import { RankingResponse } from '@/features/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RankingResponse>,
) {
  const data: RankingResponse = {
    status: 'ok',
    errorMessage: '',
    items: [],
  }
  for (let i = 0; i < 20; i++) {
    const rankingItem = {
      rank: i + 1,
      userName: 'hoge',
      score: 100,
    }
    data.items.push(rankingItem)
  }
  res.status(200).json(data)
}
