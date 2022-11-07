import { Box, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import Image from 'next/image'
import { FC } from 'react'

type MainVisualProps = {
  sx?: SxProps<Theme>
}

const MainVisual: FC<MainVisualProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('/bg.jpg')",
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '90%', md: '1000px' },
          bgcolor: 'primary.main',
          color: 'white',
          padding: { xs: '2rem', md: '4rem' },
          opacity: 0.8,
          display: 'flex',
          borderRadius: '1rem',
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image src='/HCCC_logo.png' width='200px' height='200px' />
        </Box>

        <Box sx={{ padding: '1rem' }}>
          <Typography
            variant='h4'
            component='div'
            align='center'
            sx={{
              width: { xs: undefined, md: '600px' },
              fontWeight: '800',
              paddingBottom: '3rem',
            }}
          >
            あなたも
            <Typography
              component='span'
              sx={{
                display: { xs: 'block', md: 'inline' },
                fontSize: '2.5rem',
                padding: '0 0.5rem',
                fontWeight: '900',
                color: '#ffe0b2',
              }}
            >
              Cコンパイラ
            </Typography>
            になろう
          </Typography>
          <Typography
            variant='h6'
            component='div'
            sx={{
              maxWidth: '600px',
            }}
          >
            競技者自身がCコンパイラとなってソースコードを読み込みアセンブリを吐き出す競技
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainVisual
