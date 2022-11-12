import PublishIcon from '@mui/icons-material/Publish'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'

import Loading from '@/components/atoms/Loading'
import SubmissionsTable from '@/components/molecules/SubmissionsTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useSubmissionList } from '@/features/api'

const Submissions: NextPage = () => {
  const { submissionListResponse, isLoading, isError } = useSubmissionList()

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (isLoading || !submissionListResponse) {
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PublishIcon fontSize='large' sx={{ marginRight: '0.2rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Submissions
          </Typography>
        </Box>
        <SubmissionsTable submissionList={submissionListResponse.items} />
      </BasicLayout>
    </>
  )
}

export default Submissions
