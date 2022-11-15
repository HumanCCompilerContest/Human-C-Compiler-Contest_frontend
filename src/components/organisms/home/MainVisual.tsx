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
          p: { xs: '2rem', md: '4rem' },
          opacity: 0.8,
          display: 'flex',
          borderRadius: '1rem',
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image src='/HCCC_logo.png' width='200px' height='200px' />
        </Box>

        <Box sx={{ p: '1rem' }}>
          <Typography
            component='div'
            align='center'
            sx={{
              width: { xs: undefined, md: '600px' },
              fontSize: '2.2rem',
              fontWeight: '800',
              paddingBottom: '3rem',
              color: '#ffe0b2',
            }}
          >
            HCCC / 人間 Cコンパイラコンテスト
          </Typography>

          <Typography
            variant='h5'
            component='div'
            align='center'
            sx={{
              fontWeight: '700',
              maxWidth: '600px',
            }}
          >
            Day: 2022 11.19 (Sat.) 13:00 〜
          </Typography>
          <Typography
            variant='h6'
            component='div'
            align='center'
            sx={{
              fontWeight: '700',
              pt: '0.5rem',
              maxWidth: '600px',
            }}
          >
            Duration: 60 minutes
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainVisual
