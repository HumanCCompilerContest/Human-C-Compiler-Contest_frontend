import {
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

const RequestedAbility = () => {
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
            求められる
            <br />
            技能・知識
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant='h6'
        component='div'
        sx={{ padding: match ? '0 5rem' : '3rem 2rem', fontWeight: '600' }}
      >
        <ul style={{ marginTop: 0 }}>
          <li>
            <span style={{ fontWeight: '800', color: '#f44336' }}>
              C言語の仕様に関する深い知識
            </span>
          </li>
          <li>アセンブリを書く技術</li>
          <li>ABIの知識</li>
          <li>x86_64アーキテクチャの知識</li>
          <li>コンパイラまわりのあれこれ</li>
          <li>慣れ（慣れ）</li>
        </ul>
      </Typography>
    </Box>
  )
}

export default RequestedAbility
