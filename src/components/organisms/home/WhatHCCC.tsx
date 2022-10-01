import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const WhatHCCC = () => {
  return (
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
  )
}

export default WhatHCCC
