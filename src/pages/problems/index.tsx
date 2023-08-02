import CreateIcon from '@mui/icons-material/Create'
import { Typography, Box, Alert, AlertTitle } from '@mui/material'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import ProblemCard from '@/components/molecules/ProblemCard'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblemList } from '@/features/api'

const Problems: NextPage = () => {
  const router = useRouter()
  const { problemListResponse, isLoading, isError } = useProblemList()

  useEffect(() => {
    if (problemListResponse?.status === 'login-required') {
      router.push('/login')
    }
  }, [problemListResponse?.status])

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (
    isLoading ||
    !problemListResponse ||
    problemListResponse.status === 'login-required'
  ) {
    return <Loading />
  }

  if (problemListResponse.status === 'ng') {
    return <Error statusCode={0} title={problemListResponse.errorMessage} />
  }

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
            {problemListResponse.items.map((problem) => (
              <ProblemCard
                problem={problem}
                key={problem.id}
                sx={{ m: '2rem' }}
              />
            ))}
          </Box>
        )}
      </BasicLayout>
    </>
  )
}

export default Problems
