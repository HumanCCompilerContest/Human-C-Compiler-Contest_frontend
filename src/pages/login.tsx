import LoginIcon from '@mui/icons-material/Login'
import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import LoginForm from '@/components/organisms/LoginForm'
import BasicLayout from '@/components/templates/BasicLayout'
import TextWithIcon from '@/components/atoms/TextWithIcon'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box
          sx={{
            width: { xs: 'none', md: '500px' },
            m: '1rem auto',
            p: '0 2rem',
          }}
        >
          <TextWithIcon>
            <LoginIcon sx={{ width: '40px', height: '40px', mr: '1rem' }} />
            <Typography variant='h4' sx={{ fontWeight: 600 }}>
              Login
            </Typography>
          </TextWithIcon>

          <LoginForm sx={{ m: '2rem 0' }} />
        </Box>
      </BasicLayout>
    </>
  )
}

export default Login
