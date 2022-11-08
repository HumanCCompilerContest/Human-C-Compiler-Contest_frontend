import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Code from '@/components/atoms/Code'
import Loading from '@/components/atoms/Loading'
import TitleLabel from '@/components/atoms/TitleLabel'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblem, requestSubmission } from '@/features/api'

type IFormInput = {
  asem: string
}

const Problem = () => {
  const router = useRouter()
  const { id } = router.query

  const { problemResponse, isLoading, isError } = useProblem(Number(id))
  const theme = useTheme()

  const [errorMessage, setErrorMessage] = useState('')
  const [isPostLoading, setIsPostLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit = async (data: IFormInput) => {
    setIsPostLoading(true)
    const res = await requestSubmission(Number(id), {
      asem: data.asem,
    })
    setIsPostLoading(false)

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }

    router.push(`/submissions/${res.submission.id}/`)
  }

  if (isLoading || !problemResponse) {
    return <Loading />
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
          {...register('asem')}
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
