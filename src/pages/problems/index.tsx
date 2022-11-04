import CreateIcon from '@mui/icons-material/Create'
import { CardActionArea } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { green } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import BasicLayout from '@/components/templates/BasicLayout'
import { useProblemList } from '@/features/api'

const Problems: NextPage = () => {
  const theme = useTheme()
  const { problemListResponse, isLoading, isError } = useProblemList()

  if (isLoading) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

  return (
    <>
      <Head>
        <title>problems | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CreateIcon fontSize='large' sx={{ marginRight: '0.5rem' }} />
          <Typography variant='h4' sx={{ fontWeight: '600' }}>
            Problems
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: '0 0 5rem',
          }}
        >
          {problemListResponse?.items.map((v, i) => {
            return (
              <Card
                key={i}
                sx={{
                  width: 300,
                  margin: '2rem 2rem 2rem 0',
                  backgroundColor:
                    i % 2 == 0 ? theme.palette.primary.main : green[500],
                  color: 'white',
                  textAlign: 'center',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                <CardActionArea>
                  <Link href={`/problems/${v.id}`}>
                    <CardContent>
                      <Typography sx={{ margin: '0.5rem 0 1rem' }}>
                        {v.title}
                      </Typography>
                      <Typography>{v.score}</Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            )
          })}
        </Box>
      </BasicLayout>
    </>
  )
}

export default Problems
