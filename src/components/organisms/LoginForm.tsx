import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useState, FC } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'

import { requestLogin } from '@/features/api'
import { LoginFormSchema, loginFormSchema } from '@/features/yupSchema'

type LoginFormProps = {
  sx?: SxProps<Theme>
}

const LoginForm: FC<LoginFormProps> = ({ sx }) => {
  const { mutate } = useSWRConfig()
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: yupResolver(loginFormSchema),
  })
  const router = useRouter()

  const onSubmit = async (data: LoginFormSchema) => {
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
    await router.push('/')
  }

  return (
    <Box sx={sx}>
      <Box>
        {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      </Box>

      <Box sx={{ m: '1rem 0' }}>
        <TextField
          className='w-20'
          label='User Name'
          variant='outlined'
          fullWidth
          error={'name' in errors}
          helperText={errors.name?.message ?? ''}
          {...register('name')}
        />
      </Box>

      <Box sx={{ m: '2rem 0' }}>
        <TextField
          type='password'
          label='Password'
          variant='outlined'
          fullWidth
          error={'password' in errors}
          helperText={errors.password?.message ?? ''}
          {...register('password')}
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
  )
}

export default LoginForm
