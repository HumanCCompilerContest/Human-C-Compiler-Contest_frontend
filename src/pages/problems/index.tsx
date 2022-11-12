import CreateIcon from '@mui/icons-material/Create'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Error from 'next/error'
import Head from 'next/head'

import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import ProblemCard from '@/components/molecules/ProblemCard'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblemList } from '@/features/api'

const Problems: NextPage = () => {
  const { problemListResponse, isLoading, isError } = useProblemList()

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />
  }

  if (isLoading || !problemListResponse) {
    return <Loading />
  }

  if (problemListResponse.status === 'ng') {
    return <Error statusCode={0} title={problemListResponse.errorMessage} />
  }

  return (
    <>
      <Head>
        <title>problems | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <TextWithIcon>
          <CreateIcon fontSize='large' sx={{ mr: '0.5rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Problems
          </Typography>
        </TextWithIcon>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            mb: '5rem',
          }}
        >
          {problemListResponse.items.map((problem) => (
            <ProblemCard
              problem={problem}
              key={problem.id}
              sx={{ m: '2rem' }}
            />
          ))}
        </Box>
      </BasicLayout>
    </>
  )
}

export default Problems
