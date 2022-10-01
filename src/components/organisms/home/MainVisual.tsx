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
          maxWidth: '1000px',
          bgcolor: theme.palette.primary.main,
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
  )
}

export default MainVisual
