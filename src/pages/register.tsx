import HowToRegIcon from '@mui/icons-material/HowToReg'
import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import RegisterForm from '@/components/organisms/RegisterForm'
import BasicLayout from '@/components/templates/BasicLayout'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | HCCC</title>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HowToRegIcon
              sx={{ width: '40px', height: '40px', marginRight: '1rem' }}
            />
            <Typography variant='h4' component='div' sx={{ fontWeight: 600 }}>
              Register
            </Typography>
          </Box>

          <RegisterForm sx={{ m: '2rem 0' }} />
        </Box>
      </BasicLayout>
    </>
  )
}

export default Register
