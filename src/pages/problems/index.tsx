import CreateIcon from '@mui/icons-material/Create'
import { Typography, Box, Alert, AlertTitle } from '@mui/material'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import ProblemCard from '@/components/molecules/ProblemCard'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblemList, useSubmissionList } from '@/features/api'
import { ProblemCardStatus } from '@/features/types'

const Problems: NextPage = () => {
  const router = useRouter()
  const { user } = useAuthContext()
  const { problemListResponse, isError: isProblemError } = useProblemList()
  const { submissionListResponse, isError: isSubmissionError } =
    useSubmissionList(user?.id)

  useEffect(() => {
    if (problemListResponse?.status === 'login-required') {
      router.push('/login')
    }
  }, [router, problemListResponse?.status])

  // ネットワーク関連のエラー
  if (isProblemError) {
    return (
      <Error
        statusCode={isProblemError.status}
        title={isProblemError.message}
      />
    )
  } else if (isSubmissionError) {
    return (
      <Error
        statusCode={isSubmissionError.status}
        title={isSubmissionError.message}
      />
    )
  }

  if (
    !problemListResponse ||
    problemListResponse.status === 'login-required' ||
    !submissionListResponse ||
    submissionListResponse.status === 'login-required'
  ) {
    return <Loading />
  }

  if (problemListResponse.status === 'ng') {
    return <Error statusCode={0} title={problemListResponse.errorMessage} />
  } else if (submissionListResponse.status === 'ng') {
    return <Error statusCode={0} title={submissionListResponse.errorMessage} />
  }

  // データの前処理
  const acSubmissionIDs = submissionListResponse.items
    .filter((v) => v.result === 'AC')
    .map((v) => v.problem.id)

  const wcSubmissionIDs = submissionListResponse.items
    .filter((v) => v.result === 'WC')
    .map((v) => v.problem.id)

  const errorSubmissionIDs = submissionListResponse.items
    .filter(
      (v) =>
        v.result === 'WA' ||
        v.result === 'TLE' ||
        v.result === 'RE' ||
        v.result === 'LE' ||
        v.result === 'AE' ||
        v.result === 'SystemError',
    )
    .map((v) => v.problem.id)

  return (
    <>
      <Head>
        <title>problems | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <TextWithIcon>
          <CreateIcon fontSize='large' sx={{ mr: '0.5rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Problems
          </Typography>
        </TextWithIcon>

        {problemListResponse.status === 'forbidden' ? (
          <Alert severity='error' sx={{ my: '5rem' }}>
            <AlertTitle>{problemListResponse.errorMessage}</AlertTitle>
          </Alert>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              mb: '5rem',
            }}
          >
            {problemListResponse.items.map((problem) => {
              const isAC = acSubmissionIDs.includes(problem.id)
              const isWC = wcSubmissionIDs.includes(problem.id)
              const isError = errorSubmissionIDs.includes(problem.id)
              const status: ProblemCardStatus = isAC
                ? 'ac' // ACが一つでもある問題
                : isWC
                ? 'wc' // ACが無く、WCがある問題
                : isError
                ? 'error' // AC, WCが無く、その他エラーが起きた問題
                : 'notSolved'
              return (
                <ProblemCard
                  problem={problem}
                  status={status}
                  key={problem.id}
                  sx={{ m: '2rem' }}
                />
              )
            })}
          </Box>
        )}
      </BasicLayout>
    </>
  )
}

export default Problems
