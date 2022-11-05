import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Highlight from 'react-highlight'

import SubmissionResultTable from '@/components/molecules/SubmissionResultTable'
import BasicLayout from '@/components/templates/BasicLayout'
import { useSubmission } from '@/features/api'

const Submission = () => {
  const router = useRouter()
  const { id } = router.query

  const { submissionResponse, isLoading } = useSubmission(Number(id))

  if (isLoading || !submissionResponse) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

  return (
    <BasicLayout>
      <Head>
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css'
        />
      </Head>
      <Typography variant='h3' sx={{ fontWeight: '600' }}>
        Submission #{submissionResponse.submission.id}
      </Typography>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          Source Code
        </Typography>
        <Highlight>{submissionResponse.submission.asem}</Highlight>
      </Box>

      <SubmissionResultTable submission={submissionResponse.submission} />
    </BasicLayout>
  )
}

export default Submission
