import LoginIcon from '@mui/icons-material/Login'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'

import BasicLayout from '@/components/templates/BasicLayout'
import { requestLogin } from '@/features/api'

type IFormInput = {
  name: string
  password: string
}

const Login: NextPage = () => {
  const { mutate } = useSWRConfig()
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const router = useRouter()

  const onSubmit = async (data: IFormInput) => {
    const res = await requestLogin({
      name: data.name,
      password: data.password,
    })

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }
    // データの再検証をしないと表示がログインしていない状態となる
    await mutate('/api/users/me')
    router.push('/')
  }

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LoginIcon sx={{ width: '40px', height: '40px', mr: '1rem' }} />
            <Typography variant='h4' sx={{ fontWeight: 600 }}>
              Login
            </Typography>
          </Box>

          <Box sx={{ m: '2rem 0' }}>
            {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          </Box>

          <Box sx={{ m: '1rem 0' }}>
            <TextField
              className='w-20'
              label='User Name'
              variant='outlined'
              fullWidth
              error={'name' in errors}
              helperText={errors.name ? 'この項目は必須です' : ''}
              {...register('name', { required: true })}
            />
          </Box>

          <Box sx={{ m: '2rem 0' }}>
            <TextField
              type='password'
              label='Password'
              variant='outlined'
              fullWidth
              error={'password' in errors}
              helperText={errors.password ? 'この項目は必須です' : ''}
              {...register('password', { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='contained'
              size='large'
              fullWidth
              onClick={handleSubmit(onSubmit)}
              sx={{ p: '1rem 0', fontSize: '1.2rem', fontWeight: 600 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </BasicLayout>
    </>
  )
}

export default Login
