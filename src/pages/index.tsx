import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Header />
        <Box
          sx={{
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "url('/bg.jpg')",
          }}
        >
          <Box
            sx={{
              maxWidth: '1000px',
              bgcolor: 'rgb(10, 25, 41)',
              color: 'white',
              padding: '4rem',
              opacity: 0.8,
              display: 'flex',
            }}
          >
            <Image src='/HCCC_logo.png' width='200px' height='200px' />
            <Box sx={{ padding: '1rem' }}>
              <Typography
                variant='h4'
                component='div'
                sx={{
                  width: '600px',
                  fontWeight: '800',
                  paddingBottom: '3rem',
                }}
              >
                あなたもCコンパイラーになろう
              </Typography>
              <Typography
                variant='h6'
                component='div'
                sx={{
                  width: '600px',
                }}
              >
                競技者自身がCコンパイラとなってソースコードを読み込みアセンブリを吐き出す競技
              </Typography>
            </Box>
          </Box>
        </Box>
        <Container
          maxWidth='lg'
          sx={{
            padding: '2rem 0 10rem',
          }}
        >
          <Box
            sx={{
              height: '50vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                minWidth: '300px',
                padding: '1rem 0',
                backgroundColor: 'rgb(10, 25, 41)',
              }}
            >
              <CardContent>
                <Typography
                  variant='h3'
                  component='div'
                  align='center'
                  sx={{
                    fontWeight: '800',
                    padding: '1rem 0',
                    color: 'white',
                  }}
                >
                  What is HCCC?
                </Typography>
              </CardContent>
            </Card>

            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: '2', padding: '5rem', fontWeight: '600' }}
            >
              その名の通り，競技者自身がCコンパイラとなってソースコードを読み込みアセンブリを吐き出す競技．
              <br />
              <br />
              コンパイル時間や生成されたアセンブリの正しさ，コンパイルエラーを正しく出せているかなどをスコアとして算出．
              <br />
              <br />
              最もスコアが高かったプレイヤが栄誉ある人間Cコンパイラの称号を手に入れる．
            </Typography>
          </Box>

          <Box
            sx={{
              height: '50vh',
              display: 'flex',
              alignItems: 'center',
              mb: '3rem',
            }}
          >
            <Card
              sx={{
                minWidth: '300px',
                padding: '1rem 0',
                backgroundColor: 'rgb(10, 25, 41)',
              }}
            >
              <CardContent>
                <Typography
                  variant='h4'
                  component='div'
                  align='center'
                  sx={{
                    fontWeight: '800',
                    padding: '1rem 0',
                    color: 'white',
                  }}
                >
                  求められる
                  <br />
                  技能・知識
                </Typography>
              </CardContent>
            </Card>

            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: '2', padding: '5rem', fontWeight: '600' }}
            >
              <span style={{ fontWeight: '800', color: '#f44336' }}>
                ・C言語の仕様に関する深い知識
              </span>
              <br />
              ・アセンブリを書く技術
              <br /> ・ABIの知識
              <br />
              ・複数のアーキテクチャに関する知識
              <br /> ・コンパイラまわりのあれこれ
              <br />
              ・慣れ（慣れ）
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgb(10, 25, 41)',
              color: 'white',
              padding: '1rem',
              borderRadius: '10px',
            }}
          >
            <Typography
              variant='h3'
              component='div'
              align='center'
              sx={{
                fontWeight: '800',
                paddingBottom: '3rem',
              }}
            >
              Regulation
            </Typography>
            <Alert
              variant='outlined'
              severity='success'
              sx={{
                color: 'white',
                mb: '1rem',
                lineHeight: '2rem',
                borderWidth: '3px',
              }}
            >
              <AlertTitle sx={{ fontWeight: '900' }}>許可項目</AlertTitle>
              <ul>
                <li>
                  <Typography>仕様書の閲覧</Typography>
                </li>
                <li>
                  <ul>
                    <li>
                      <Link
                        href='https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf](https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf'
                        color='primary'
                      >
                        C 仕様書
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='https://uclibc.org/docs/psABI-x86_64.pdf](https://uclibc.org/docs/psABI-x86_64.pdf'
                        color='primary'
                      >
                        AMD64-ABI
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Typography>検証環境を使ってローカルでデバッグ</Typography>
                </li>
                <li>
                  <Typography> gdbによるデバッグ</Typography>
                </li>
                <li>
                  <Typography>人間による異常な最適化</Typography>
                </li>
                <li>
                  <Typography>紙，鉛筆，電卓などを用いる</Typography>
                </li>
              </ul>
            </Alert>
            <Alert
              severity='error'
              variant='outlined'
              sx={{
                color: 'white',
                mb: '1rem',
                lineHeight: '2rem',
                borderWidth: '3px',
              }}
            >
              <AlertTitle sx={{ fontWeight: '900' }}>禁止事項</AlertTitle>
              <ul>
                <li>
                  <Typography>
                    gcc -sやgodboltなどのツールによる不正なコンパイル
                  </Typography>
                </li>
                <li>
                  <Typography>既存のコンパイラを使用すること</Typography>
                </li>
                <li>
                  <Typography>オンラインのツールを使用すること</Typography>
                </li>
                <li>
                  <Typography>
                    コンパイラやツールを自作して使用すること
                  </Typography>
                </li>
                <li>
                  <Typography>他者と回答を共有すること</Typography>
                </li>
                <li>
                  <Typography>
                    アセンブリ内に特定の回答を不正に埋め込む行為
                  </Typography>
                </li>
              </ul>
            </Alert>
          </Box>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default Home
