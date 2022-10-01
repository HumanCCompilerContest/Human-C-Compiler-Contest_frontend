import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary.main, padding: '3rem 0' }}
    >
      <Typography
        variant='h6'
        component='div'
        align='center'
        sx={{ color: 'white' }}
      >
        Human C Compiler Contest
      </Typography>
    </Box>
  )
}

export default Footer
