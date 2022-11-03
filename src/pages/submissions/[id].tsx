import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Highlight from 'react-highlight'
import BasicLayout from '@/components/templates/BasicLayout'

const Submission = () => {
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
        Submission {id}
      </Typography>

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
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        User karintou
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        DateTime 1900/1/1
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        問題名
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        結果
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        得点 100
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        コード長 310byte
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        エラーメッセージ
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        ジャッジ結果
      </Typography>
    </BasicLayout>
  )
}

export default Submission
