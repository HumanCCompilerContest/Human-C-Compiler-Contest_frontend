import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'

const MainVisual = () => {
  const match = useMediaQuery('(min-width:577px)')
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
          maxWidth: match ? '1000px' : '90%',
          bgcolor: theme.palette.primary.main,
          color: 'white',
          padding: match ? '4rem' : '2rem',
          opacity: 0.8,
          display: 'flex',
          borderRadius: '1rem',
        }}
      >
        {match && <Image src='/HCCC_logo.png' width='200px' height='200px' />}

        <Box sx={{ padding: '1rem' }}>
          <Typography
            variant='h4'
            component='div'
            sx={{
              width: match ? '600px' : undefined,
              fontWeight: '800',
              paddingBottom: '3rem',
            }}
          >
            あなたも
            <span
              style={{
                display: match ? undefined : 'block',
                fontSize: '2.5rem',
                padding: '0 0.5rem',
                fontWeight: '900',
                color: '#ffe0b2',
              }}
            >
              Cコンパイラ
            </span>
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
