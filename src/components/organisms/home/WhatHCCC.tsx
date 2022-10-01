import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const WhatHCCC = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          minWidth: '300px',
          padding: '1rem 0',
          backgroundColor: theme.palette.primary.main,
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
        sx={{ padding: '5rem', fontWeight: '600' }}
      >
        <p>
          その名の通り，競技者自身がCコンパイラとなってソースコードを読み込みアセンブリを吐き出す競技．
        </p>
        <p>
          コンパイル時間や生成されたアセンブリの正しさ，コンパイルエラーを正しく出せているかなどをスコアとして算出．
        </p>
        <p>
          最もスコアが高かったプレイヤが栄誉ある人間Cコンパイラの称号を手に入れる．
        </p>
      </Typography>
    </Box>
  )
}

export default WhatHCCC
