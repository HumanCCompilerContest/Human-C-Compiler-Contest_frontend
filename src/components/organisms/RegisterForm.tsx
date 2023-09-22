import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Button, TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'

import { requestRegister } from '@/features/api'
import { RegisterFormSchema, registerFormSchema } from '@/features/yupSchema'

type RegisterFormProps = {
  sx?: SxProps<Theme>
}

const RegisterForm: FC<RegisterFormProps> = ({ sx }) => {
  const { mutate } = useSWRConfig()
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: yupResolver(registerFormSchema),
  })

  const onSubmit = async (data: RegisterFormSchema) => {
    const res = await requestRegister({
      name: data.name,
      password: data.password,
    })

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }

    // キャッシュクリア
    await mutate(() => true, undefined, { revalidate: false })
    // データの再検証をしないとログインしていない状態となる
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
      <Button
        variant='contained'
        size='large'
        fullWidth
        onClick={handleSubmit(onSubmit)}
        sx={{ p: '1rem 0', fontSize: '1.2rem', fontWeight: 600 }}
      >
        Register
      </Button>
    </Box>
  )
}

export default RegisterForm
