import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'

import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import RankingTable from '@/components/molecules/RankingTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useRanking } from '@/features/api'

const Ranking: NextPage = () => {
  const { rankingResponse, isLoading, isError } = useRanking()

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (!rankingResponse) {
    return <Loading />
  }

  if (rankingResponse.status === 'ng') {
    return <Error statusCode={0} title={rankingResponse.errorMessage} />
  }

  const rankingList = rankingResponse.items

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
        <RankingTable rankingList={rankingList} />
      </BasicLayout>
    </>
  )
}

export default Ranking
