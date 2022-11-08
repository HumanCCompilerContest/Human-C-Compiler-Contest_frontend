import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Code from '@/components/atoms/Code'
import Loading from '@/components/atoms/Loading'
import SubmissionResultTable from '@/components/molecules/SubmissionResultTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useSubmission } from '@/features/api'

const Submission = () => {
  const router = useRouter()
  const { id } = router.query

  const { submissionResponse, isLoading } = useSubmission(Number(id))

  if (isLoading || !submissionResponse) {
    return <Loading />
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

      <Box sx={{ m: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          Source Code
        </Typography>
        <Code language='assembly'>{submissionResponse.submission.asem}</Code>
      </Box>

      <SubmissionResultTable submission={submissionResponse.submission} />
    </BasicLayout>
  )
}

export default Submission
