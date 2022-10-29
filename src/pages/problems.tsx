import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { CardActionArea } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import Link from 'next/link'
import { green } from '@mui/material/colors'

import BasicLayout from '@/components/templates/BasicLayout'

const Login: NextPage = () => {
  const theme = useTheme()

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
          <Typography variant='h4'>Problems</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '0 0 5rem' }}>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => {
            return (
              <Card
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
                  <Link href='/problems/1'>
                    <CardContent>
                      <Typography sx={{ margin: '0.5rem 0 1rem' }}>
                        Hello,World!!!
                      </Typography>
                      <Typography>400</Typography>
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

export default Login
