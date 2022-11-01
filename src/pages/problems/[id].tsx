import { useRouter } from 'next/router'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import BasicLayout from '@/components/templates/BasicLayout'
import Highlight from 'react-highlight'

const Problem = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <BasicLayout>
      <Head>
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css'
        />
      </Head>
      <Typography variant='h3' sx={{ fontWeight: '600' }}>
        Const Problem {id}
      </Typography>
      <Typography variant='h6' sx={{ margin: '2rem 0' }}>
        TimeLimit 2sec / Score 200
      </Typography>
      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          問題文
        </Typography>
        <Typography>42を返すコードをコンパイルしてください。</Typography>
      </Box>

      <Box sx={{ margin: '4rem 0' }}>
        <Typography
          variant='h4'
          sx={{ fontWeight: '600', marginBottom: '1rem' }}
        >
          Source Code
        </Typography>
        <Highlight>
          {`int main(void) {
	return 42;
}`}
        </Highlight>
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
