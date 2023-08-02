import { Alert, Box, Button, TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'

import { requestRegister } from '@/features/api'

type IFormInput = {
  name: string
  password: string
}

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
    await mutate('/api/users/me')
    router.push('/')
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
