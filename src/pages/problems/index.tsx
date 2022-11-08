import CreateIcon from '@mui/icons-material/Create'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'

import Loading from '@/components/atoms/Loading'
import TextWithIcon from '@/components/atoms/TextWithIcon'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import ProblemCard from '@/components/molecules/ProblemCard'
import BasicLayout from '@/components/templates/BasicLayout'
import { useProblemIsCorrectList } from '@/features/api'

const Problems: NextPage = () => {
  const { user } = useAuthContext()
  const { problemIsCorrectList, isLoading, isError } = useProblemIsCorrectList(
    user?.id,
  )

  if (isLoading) {
    return <Loading />
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
          {problemIsCorrectList?.map((problem) => (
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
