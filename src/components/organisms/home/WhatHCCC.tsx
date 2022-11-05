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
        mb: '8rem',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '300px',
          height: '250px',
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
        sx={{ padding: '0 5rem', fontWeight: '600' }}
      >
        <p style={{ margin: 0 }}>
          人間Cコンパイラコンテストとは，文字通り競技者自身がCコンパイラとなってC言語からアセンブリを生成し，その時間と正確さを競う競技です．
        </p>
        <p>
          競技者はC言語のプログラムを渡され，それを見てコンパイルが通らなければ（C言語の仕様に則っていなければ）該当する最初の行を指摘し，コンパイルが通るようであればアセンブリを書いて提出します．
        </p>
        <p>
          最もスコアが高かったプレイヤが栄誉ある
          <span style={{ fontWeight: '800', color: '#f44336' }}>
            人間Cコンパイラの称号
          </span>
          を手に入れる．
        </p>
      </Typography>
    </Box>
  )
}

export default WhatHCCC
