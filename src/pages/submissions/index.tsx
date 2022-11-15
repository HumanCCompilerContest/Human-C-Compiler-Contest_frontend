import PublishIcon from '@mui/icons-material/Publish'
import { Typography, Box, Alert, AlertTitle } from '@mui/material'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Loading from '@/components/atoms/Loading'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import SubmissionsTable from '@/components/molecules/SubmissionsTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useSubmissionList } from '@/features/api'

const Submissions: NextPage = () => {
  const router = useRouter()
  const { user_id } = router.query
  const { user } = useAuthContext()
  const [refreshInterval, setRefreshInterval] = useState(5000)
  const { submissionListResponse, isLoading, isError } = useSubmissionList(
    Number(user_id),
    {
      refreshInterval,
    },
  )

  const hasPending = submissionListResponse?.items.reduce(
    (p, c) => c.result === 'Pending' || p,
    false,
  )

  useEffect(() => {
    if (submissionListResponse?.status === 'login-required') {
      router.push('/login')
    }

    setRefreshInterval(hasPending ? 5000 : 0)
  }, [submissionListResponse?.status, hasPending])

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (
    isLoading ||
    !submissionListResponse ||
    submissionListResponse.status === 'login-required'
  ) {
    return <Loading />
  }

  if (submissionListResponse.status === 'ng') {
    return <Error statusCode={0} title={submissionListResponse.errorMessage} />
  }

  return (
    <>
      <Head>
        <title>submissions | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        {submissionListResponse.status === 'forbidden' ? (
          <Alert severity='error' sx={{ my: '5rem' }}>
            <AlertTitle>{submissionListResponse.errorMessage}</AlertTitle>
          </Alert>
        ) : (
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PublishIcon fontSize='large' sx={{ marginRight: '0.2rem' }} />
              <Typography variant='h4' sx={{ fontWeight: '600' }}>
                {Number(user_id) === user?.id ? 'My Submit' : 'Submit'}
              </Typography>
            </Box>
            <SubmissionsTable submissionList={submissionListResponse.items} />
          </Box>
        )}
      </BasicLayout>
    </>
  )
}

export default Submissions
