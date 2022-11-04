import LoginIcon from '@mui/icons-material/Login'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
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
  const { cache } = useSWRConfig()
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit = async (data: IFormInput) => {
    const res = await requestLogin({
      name: data.name,
      password: data.password,
    })

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }
    // キャッシュを削除しないとログインしていない状態となる
    cache.delete('/api/users/me')
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title>Login | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box sx={{ width: '500px', margin: '1rem auto', padding: '0 2rem' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LoginIcon
              sx={{ width: '40px', height: '40px', marginRight: '1rem' }}
            />
            <Typography variant='h4' component='div' sx={{ fontWeight: 600 }}>
              Login
            </Typography>
          </Box>

          <Box sx={{ margin: '2rem 0' }}>
            {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          </Box>

          <Box sx={{ margin: '1rem 0' }}>
            <TextField
              id='outlined-basic'
              className='w-20'
              label='User Name'
              variant='outlined'
              fullWidth
              error={'name' in errors}
              helperText={errors.name ? 'この項目は必須です' : ''}
              {...register('name', { required: true })}
            />
          </Box>

          <Box sx={{ margin: '2rem 0' }}>
            <TextField
              id='outlined-basic'
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
              sx={{ padding: '1rem 0', fontSize: '1.2rem', fontWeight: 600 }}
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
