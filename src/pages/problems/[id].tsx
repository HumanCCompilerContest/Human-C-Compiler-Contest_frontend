import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  AlertTitle,
} from '@mui/material'
import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, KeyboardEventHandler } from 'react'
import { useForm } from 'react-hook-form'

import Code from '@/components/atoms/Code'
import Loading from '@/components/atoms/Loading'
import TitleLabel from '@/components/atoms/TitleLabel'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import BasicLayout from '@/components/templates/BasicLayout'
import {
  useProblem,
  requestSubmission,
  useSubmissionList,
} from '@/features/api'

type IFormInput = {
  asm: string
}

const Problem = () => {
  const router = useRouter()
  const { id } = router.query
  const { user } = useAuthContext()

  const {
    problemResponse,
    isLoading: isProblemLoading,
    isError: isProblemError,
  } = useProblem(Number(id))
  const {
    submissionListResponse,
    isLoading: isSubmissionLoading,
    isError: isSubmissionError,
  } = useSubmissionList(user?.id)

  const [errorMessage, setErrorMessage] = useState('')
  const [isPostLoading, setIsPostLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const hasWCSubmission = submissionListResponse?.items
    ?.filter((v) => v.problem.id === Number(id))
    .reduce((pv, cv) => pv || cv.result === 'WC', false)

  useEffect(() => {
    if (problemResponse?.status === 'login-required') {
      router.push('/login')
      return
    }
  }, [problemResponse?.status])

  const onSubmit = async (data: IFormInput) => {
    setIsPostLoading(true)
    const res = await requestSubmission(Number(id), {
      asm: data.asm,
      isCE: false,
    })
    setIsPostLoading(false)

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }

    router.push(`/submissions/${res.submission.id}/`)
  }

  const handleCEClick = async () => {
    setIsPostLoading(true)
    const res = await requestSubmission(Number(id), {
      asm: '',
      isCE: true,
    })
    setIsPostLoading(false)

    if (res.status === 'ng') {
      setErrorMessage(res.errorMessage)
      return
    }

    router.push(`/submissions/${res.submission.id}/`)
  }

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    const value = target.value

    if (e.key === 'Tab') {
      e.preventDefault()

      const cursorPosition = target.selectionStart
      const cursorEndPosition = target.selectionEnd
      const tab = '\t'
      if (cursorPosition === null || cursorEndPosition === null) {
        return
      }

      target.value =
        value.substring(0, cursorPosition) +
        tab +
        value.substring(cursorEndPosition)

      target.selectionStart = cursorPosition + 1
      target.selectionEnd = cursorPosition + 1
    }
  }

  if (isProblemError) {
    return (
      <Error
        statusCode={isProblemError.status}
        title={isProblemError.message}
      />
    )
  }

  if (isSubmissionError) {
    return (
      <Error
        statusCode={isSubmissionError.status}
        title={isSubmissionError.message}
      />
    )
  }

  if (
    isProblemLoading ||
    !problemResponse ||
    problemResponse.status === 'login-required' ||
    isSubmissionLoading ||
    !submissionListResponse ||
    submissionListResponse.status === 'login-required'
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

      {problemResponse.status === 'forbidden' ? (
        <Alert severity='error' sx={{ my: '5rem' }}>
          <AlertTitle>{problemResponse.errorMessage}</AlertTitle>
        </Alert>
      ) : (
        <Box>
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

            {hasWCSubmission ? (
              <Typography
                variant='h5'
                sx={{
                  mt: '5rem',
                  bgcolor: '#ef5350',
                  color: 'white',
                  lineHeight: '1.5',
                  fontWeight: '600',
                  p: '2rem',
                }}
              >
                正しいコードに対し,コンパイルエラーが提出されました. <br />
                この問題を再び回答することはできません.
                <br />
                詳細は
                <a
                  href='https://github.com/Alignof/Human_C_Compiler_Contest'
                  target='_black'
                >
                  レギュレーション
                </a>
                をご確認ください.
              </Typography>
            ) : (
              <Box>
                <Box sx={{ m: '2rem 0' }}>
                  {errorMessage && (
                    <Alert severity='error'>{errorMessage}</Alert>
                  )}
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
                  InputProps={{
                    onKeyDown: handleKeyDown,
                  }}
                />
                <Box
                  sx={{ display: 'flex', justifyContent: 'center', m: '4rem' }}
                >
                  <Button
                    variant='contained'
                    size='large'
                    sx={{
                      width: '300px',
                      py: '1.2rem',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      '&:hover': {
                        opacity: 0.8,
                      },
                    }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                  <Button
                    variant='contained'
                    size='large'
                    sx={{
                      width: '300px',
                      backgroundColor: '#ff3939',
                      ml: '1.5rem',
                      py: '1.2rem',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      '&:hover': {
                        backgroundColor: '#ff3939',
                        opacity: 0.8,
                      },
                    }}
                    onClick={handleCEClick}
                  >
                    Compile Error
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      )}

      {isPostLoading && <Loading />}
    </BasicLayout>
  )
}

export default Problem
