import FeedIcon from '@mui/icons-material/Feed'
import { Box, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import TextWithIcon from '@/components/atoms/TextWithIcon'

type JoinConditionProps = {
  sx?: SxProps<Theme>
}

const JoinCondition: FC<JoinConditionProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <TextWithIcon>
        <FeedIcon sx={{ width: '60px', height: '60px', mr: '1rem' }} />
        <Typography variant='h3'>参加条件</Typography>
      </TextWithIcon>

      <Box sx={{ width: { xs: '90%', md: '600px' }, m: '3rem auto' }}>
        <Typography variant='h6' sx={{ m: '2rem 0 1rem' }}>
          <p>
            低レイヤに興味がある方からCコンパイラ自作勢までレベルを問わず募集します．
          </p>
          <p>
            当日はSECCONCONイベント内のZoomで進行を行うので、参加される方は
            <a
              href='https://forms.gle/4UiJnoR6gRoCzkpT8'
              target='_blank'
              rel='noreferrer'
            >
              応募フォーム
            </a>
            の入力をお願いします。
          </p>
          <p>
            裏番組として入門編を流す予定ですので自分のレベル感に合わせて解説を聞いたり競技に戻ったりして頂いて構いません．
            皆さんの参加をお待ちしています．
          </p>
        </Typography>
      </Box>
    </Box>
  )
}

export default JoinCondition
