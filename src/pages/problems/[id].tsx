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
      <Typography variant='h6' sx={{ margin: '2rem 0' }}>
        TimeLimit 2sec / Score {problem.score}
      </Typography>
      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{
            fontWeight: '600',
            marginBottom: '2rem',
            padding: '1rem',
            borderLeft: `10px solid ${theme.palette.secondary.main}`,
            backgroundColor: '#efefef',
          }}
        >
          問題文
        </Typography>
        <Typography variant='h6'>{problem.statement}</Typography>
      </Box>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          Source Code
        </Typography>
        <Highlight>{problem.code}</Highlight>
      </Box>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          入力
        </Typography>
        <Typography variant='h6'>{problem.input_desc}</Typography>
      </Box>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          出力
        </Typography>
        <Typography variant='h6'>{problem.output_desc}</Typography>
      </Box>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          Submission
        </Typography>

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
