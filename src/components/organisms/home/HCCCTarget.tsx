import {
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

const HCCCTarget = () => {
  const theme = useTheme()
  const match = useMediaQuery('(min-width:577px)')

  return (
    <Box
      sx={{
        display: 'flex',
        mb: match ? '8rem' : '4rem',
        flexDirection: match ? undefined : 'column',
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
            variant='h4'
            component='div'
            align='center'
            sx={{
              fontWeight: '800',
              padding: '1rem 0',
              color: 'white',
            }}
          >
            競技の目的
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant='h6'
        component='div'
        sx={{ padding: match ? '0 5rem' : '3rem 2rem', fontWeight: '600' }}
      >
        <p style={{ margin: 0 }}>
          この競技の目的は競技を通じてアセンブリやC言語の仕様，ABIと仲良くなることです．
        </p>
        <p>
          人力でCコンパイラと同じことをするというアプローチから普段使っているコンパイラの中身を解明し，アセンブリを書いて読んでデバッグすることで低レイヤの力をつけることを目標とします．
        </p>
      </Typography>
    </Box>
  )
}

export default HCCCTarget
