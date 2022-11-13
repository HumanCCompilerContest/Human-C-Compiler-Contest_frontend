import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Code from '@/components/atoms/Code'
import Loading from '@/components/atoms/Loading'
import TitleLabel from '@/components/atoms/TitleLabel'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblem, requestSubmission } from '@/features/api'

type IFormInput = {
  asm: string
}

const Problem = () => {
  const router = useRouter()
  const { id } = router.query

  const { problemResponse, isLoading, isError } = useProblem(Number(id))

  const [errorMessage, setErrorMessage] = useState('')
  const [isPostLoading, setIsPostLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  useEffect(() => {
    if (problemResponse?.status === 'login-required') {
      router.push('/login')
    }
  }, [problemResponse?.status])

  const onSubmit = async (data: IFormInput) => {
    setIsPostLoading(true)
    const res = await requestSubmission(Number(id), {
      asm: data.asm,
    })
    setIsPostLoading(false)

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }

    router.push(`/submissions/${res.submission.id}/`)
  }

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (
    isLoading ||
    !problemResponse ||
    problemResponse.status === 'login-required'
  ) {
    return <Loading />
  }

  if (problemResponse.status === 'ng') {
    return <Error statusCode={0} title={problemResponse.errorMessage} />
  }

  const problem = problemResponse.problem

  return (
    <BasicLayout>
      <Head>
        <title>problem {problem.title} | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>
      <Typography variant='h3' sx={{ fontWeight: '600' }}>
        {problem.title}
      </Typography>
      <Typography variant='h6' sx={{ my: '2rem' }}>
        TimeLimit 2sec / Score {problem.score}
      </Typography>

      <Box sx={{ m: '5rem 0 10rem' }}>
        <TitleLabel label='問題文' sx={{ mb: '2rem' }} />
        <Typography variant='h6' sx={{ p: '1rem' }}>
          {problem.statement}
        </Typography>
      </Box>

      <Box sx={{ m: '10rem 0' }}>
        <TitleLabel label='Source Code' sx={{ mb: '2rem' }} />
        <Box sx={{ fontSize: '1.2rem' }}>
          <Code language='c'>{problem.code}</Code>
        </Box>
      </Box>

      <Box sx={{ m: '10rem 0' }}>
        <TitleLabel label='Input' sx={{ mb: '2rem' }} />
        <Typography variant='h6' sx={{ p: '1rem' }}>
          {problem.input_desc}
        </Typography>
      </Box>

      <Box sx={{ m: '10rem 0' }}>
        <TitleLabel label='Output' sx={{ mb: '2rem' }} />
        <Typography variant='h6'>{problem.output_desc}</Typography>
      </Box>

      <Box sx={{ m: '10rem 0' }}>
        <TitleLabel label='Submission' sx={{ mb: '2rem' }} />

        <Box sx={{ m: '2rem 0' }}>
          {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
        </Box>

        <TextField
          color='primary'
          label='submission'
          variant='filled'
          rows={10}
          multiline
          fullWidth
          placeholder='input assembly'
          error={'asm' in errors}
          helperText={errors.asm ? 'この項目は必須です' : ''}
          {...register('asm', { required: true })}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', m: '4rem' }}>
          <Button
            variant='contained'
            size='large'
            sx={{ width: '200px' }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {isPostLoading && <Loading />}
    </BasicLayout>
  )
}

export default Problem
