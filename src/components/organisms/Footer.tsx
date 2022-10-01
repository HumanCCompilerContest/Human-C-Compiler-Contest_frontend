import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(10, 25, 41)', padding: '3rem 0' }}>
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
