import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'

import BasicLayout from '@/components/templates/BasicLayout'

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box sx={{ width: '500px', margin: '1rem auto' }}>
          <Typography
            variant='h4'
            component='div'
            sx={{ fontWeight: 600, margin: '0 0 0 2rem' }}
          >
            Register
          </Typography>
          <Box sx={{ margin: '1rem 2rem' }}>
            <TextField
              id='outlined-basic'
              className='w-20'
              label='User Name'
              variant='outlined'
              fullWidth
            />
          </Box>
          <Box sx={{ margin: '2rem' }}>
            <TextField
              id='outlined-basic'
              label='Password'
              variant='outlined'
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'right',
              marginRight: '3rem',
            }}
          >
            <Button variant='contained' size='large'>
              Register
            </Button>
          </Box>
        </Box>
      </BasicLayout>
    </>
  )
}

export default Register
