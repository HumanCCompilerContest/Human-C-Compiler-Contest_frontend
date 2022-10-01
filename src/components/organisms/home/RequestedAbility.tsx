import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const RequestedAbility = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        mb: '3rem',
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
        sx={{ flexGrow: '2', padding: '5rem', fontWeight: '600' }}
      >
        <span style={{ fontWeight: '800', color: '#f44336' }}>
          ・C言語の仕様に関する深い知識
        </span>
        <br />
        ・アセンブリを書く技術
        <br /> ・ABIの知識
        <br />
        ・複数のアーキテクチャに関する知識
        <br /> ・コンパイラまわりのあれこれ
        <br />
        ・慣れ（慣れ）
      </Typography>
    </Box>
  )
}

export default RequestedAbility
