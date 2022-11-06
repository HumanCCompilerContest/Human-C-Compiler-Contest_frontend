import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'

const MainVisual = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '1000px' },
          bgcolor: theme.palette.primary.main,
          color: 'white',
          padding: { xs: '2rem', sm: '4rem' },
          opacity: 0.8,
          display: 'flex',
          borderRadius: '1rem',
        }}
      >
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Image src='/HCCC_logo.png' width='200px' height='200px' />
        </Box>

        <Box sx={{ padding: '1rem' }}>
          <Typography
            variant='h4'
            component='div'
            sx={{
              width: { xs: undefined, sm: '600px' },
              fontWeight: '800',
              paddingBottom: '3rem',
            }}
          >
            あなたも
            <Box
              component='span'
              sx={{
                display: { xs: 'block', sm: 'inline' },
                fontSize: '2.5rem',
                padding: '0 0.5rem',
                fontWeight: '900',
                color: '#ffe0b2',
              }}
            >
              Cコンパイラ
            </Box>
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
