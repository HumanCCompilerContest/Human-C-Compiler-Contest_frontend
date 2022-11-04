import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Highlight from 'react-highlight'
import TitleLabel from '@/components/atoms/TitleLabel'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblem } from '@/features/api'

const Problem = () => {
  const router = useRouter()
  const { id } = router.query

  const { problemResponse, isLoading, isError } = useProblem(Number(id))
  const theme = useTheme()

  if (isLoading || !problemResponse) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

  const problem = problemResponse.problem

  return (
    <BasicLayout>
      <Head>
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css'
        />
      </Head>
      <Typography variant='h3' sx={{ fontWeight: '600' }}>
        {problem.title}
      </Typography>
      <Typography variant='h6' sx={{ my: '2rem' }}>
        TimeLimit 2sec / Score {problem.score}
      </Typography>

      <Box sx={{ margin: '5rem 0 10rem' }}>
        <TitleLabel label='問題文' sx={{ mb: '2rem' }} />
        <Typography variant='h6' sx={{ p: '1rem' }}>
          {problem.statement}
        </Typography>
      </Box>

      <Box sx={{ margin: '10rem 0' }}>
        <TitleLabel label='Source Code' sx={{ mb: '2rem' }} />
        <Highlight>{problem.code}</Highlight>
      </Box>

      <Box sx={{ margin: '10rem 0' }}>
        <TitleLabel label='Input' sx={{ mb: '2rem' }} />
        <Typography variant='h6' sx={{ p: '1rem' }}>
          {problem.input_desc}
        </Typography>
      </Box>

      <Box sx={{ margin: '10rem 0' }}>
        <TitleLabel label='Output' sx={{ mb: '2rem' }} />
        <Typography variant='h6'>{problem.output_desc}</Typography>
      </Box>

      <Box sx={{ margin: '10rem 0' }}>
        <TitleLabel label='Submission' sx={{ mb: '2rem' }} />

        <TextField
          color='primary'
          label='submission'
          variant='filled'
          rows={10}
          multiline
          fullWidth
          placeholder='input assembly'
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '4rem' }}>
          <Button variant='contained' size='large' sx={{ width: '200px' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </BasicLayout>
  )
}

export default Problem
