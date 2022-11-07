import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import TextWithIcon from '@/components/atoms/TextWithIcon'
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
        <TextWithIcon>
          <StarIcon fontSize='large' sx={{ mr: '0.2rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Ranking
          </Typography>
        </TextWithIcon>
        <RankingTable />
      </BasicLayout>
    </>
  )
}

export default Ranking
