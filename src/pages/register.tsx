import HowToRegIcon from '@mui/icons-material/HowToReg'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'

import BasicLayout from '@/components/templates/BasicLayout'
import { requestRegister } from '@/features/api'

type IFormInput = {
  name: string
  password: string
}

const Register: NextPage = () => {
  const { mutate } = useSWRConfig()
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit = async (data: IFormInput) => {
    const res = await requestRegister({
      name: data.name,
      password: data.password,
    })

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }
    // データの再検証をしないとログインしていない状態となる
    mutate('/api/users/me')
    router.push('/')
  }

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
            margin: '1rem auto',
            padding: '0 2rem',
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

          <Box sx={{ margin: '2rem 0' }}>
            {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
          </Box>

          <Box sx={{ margin: '1rem 0' }}>
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

          <Box sx={{ margin: '2rem 0' }}>
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              error={'password' in errors}
              helperText={errors.password ? 'この項目は必須です' : ''}
              {...register('password', { required: true })}
            />
          </Box>
          <Button
            variant='contained'
            size='large'
            fullWidth
            onClick={handleSubmit(onSubmit)}
            sx={{ padding: '1rem 0', fontSize: '1.2rem', fontWeight: 600 }}
          >
            Register
          </Button>
        </Box>
      </BasicLayout>
    </>
  )
}

export default Register
