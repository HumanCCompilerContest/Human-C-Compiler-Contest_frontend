import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import * as React from 'react'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'rgb(10, 25, 41)',
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ margin: '0 0.5rem 0 1rem' }}
          >
            <Image src='/HCCC_logo.png' layout='fill' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            HCCC
          </Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
