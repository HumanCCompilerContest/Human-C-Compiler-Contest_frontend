import { Typography, Box, Alert, AlertTitle } from '@mui/material'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Code from '@/components/atoms/Code'
import Loading from '@/components/atoms/Loading'
import SubmissionResultTable from '@/components/molecules/SubmissionResultTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useSubmission } from '@/features/api'

const Submission = () => {
  const router = useRouter()
  const { id } = router.query
  const [refreshInterval, setRefreshInterval] = useState(2000)

  const { submissionResponse, isLoading, isError } = useSubmission(Number(id), {
    refreshInterval,
  })

  useEffect(() => {
    if (submissionResponse?.status === 'login-required') {
      router.push('/login')
      return
    }

    setRefreshInterval(
      submissionResponse?.submission.result === 'Pending' ? 2000 : 0,
    )
  }, [submissionResponse?.status, submissionResponse?.submission?.result])

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (
    isLoading ||
    !submissionResponse ||
    submissionResponse.status === 'login-required'
  ) {
    return <Loading />
  }

  if (submissionResponse.status === 'ng') {
    return <Error statusCode={0} title={submissionResponse.errorMessage} />
  }

  return (
    <BasicLayout>
      <Head>
        <title>submissions | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>
      <Typography variant='h3' sx={{ fontWeight: '600' }}>
        Submission #{submissionResponse.submission.id}
      </Typography>
      {submissionResponse.status === 'forbidden' ? (
        <Alert severity='error' sx={{ my: '5rem' }}>
          <AlertTitle>{submissionResponse.errorMessage}</AlertTitle>
        </Alert>
      ) : (
        <Box>
          <Box sx={{ m: '4rem 0' }}>
            <Typography
              variant='h4'
              sx={{ fontWeight: '600', marginBottom: '1rem' }}
            >
              Source Code
            </Typography>
            {submissionResponse.submission.isCE ? (
              <Typography
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#ef9a9a',
                  color: 'white',
                  p: '0.5rem 1rem',
                  borderRadius: '10rem',
                  fontWeight: '800',
                }}
              >
                Compile Error Submitted
              </Typography>
            ) : (
              <Code language='assembly'>
                {submissionResponse.submission.asm}
              </Code>
            )}
            {submissionResponse.submission.error_message && (
              <Box
                sx={{
                  mt: '2rem',
                }}
              >
                <Typography variant='h5' sx={{ fontWeight: '600' }}>
                  Judging Error
                </Typography>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    p: '1rem',
                    mt: '1rem',
                    borderRadius: '6px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                    }}
                  >
                    {submissionResponse.submission.error_message}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
          <SubmissionResultTable submission={submissionResponse.submission} />
        </Box>
      )}
    </BasicLayout>
  )
}

export default Submission
