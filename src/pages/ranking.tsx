import StarIcon from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'

import RankingTable from '@/components/molecules/RankingTable'
import BasicLayout from '@/components/templates/BasicLayout'

const Ranking: NextPage = () => {
  return (
    <>
      <Head>
        <title>ranking | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StarIcon fontSize='large' sx={{ marginRight: '0.2rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Ranking
          </Typography>
        </Box>
        <RankingTable />
      </BasicLayout>
    </>
  )
}

export default Ranking
