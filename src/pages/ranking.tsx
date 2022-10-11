import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import BasicLayout from '@/components/templates/BasicLayout'
import RankingTable from '@/components/molecules/RankingTable'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>ranking | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box>
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            RANKING
          </Typography>
        </Box>
        <RankingTable />
      </BasicLayout>
    </>
  )
}

export default Login
