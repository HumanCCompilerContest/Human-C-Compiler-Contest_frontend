import PublishIcon from '@mui/icons-material/Publish'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'

import Loading from '@/components/atoms/Loading'
import SubmissionsTable from '@/components/molecules/SubmissionsTable'
import BasicLayout, { AuthContext } from '@/components/templates/BasicLayout'
import { useSubmissionList } from '@/features/api'

const Submissions: NextPage = () => {
  const { user } = useContext(AuthContext)
  const { submissionListResponse, isLoading } = useSubmissionList(user?.id)

  if (isLoading || !submissionListResponse) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>my submissions | HCCC</title>
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
