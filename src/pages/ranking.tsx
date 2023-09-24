import StarIcon from '@mui/icons-material/Star'
import { Alert, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'

import { useEffect, useState } from 'react'
import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import RankingTable from '@/components/molecules/RankingTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useRanking } from '@/features/api'

const CONTEST_END_DATE = new Date(process.env.NEXT_PUBLIC_CONTEST_END || '')

const Ranking: NextPage = () => {
  const { rankingResponse, isError } = useRanking()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])

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

        {now > CONTEST_END_DATE && (
          <Alert severity='info' sx={{ m: '2rem 0' }}>
            コンテストは終了しました。
          </Alert>
        )}

        <RankingTable rankingList={rankingList} />
      </BasicLayout>
    </>
  )
}

export default Ranking
