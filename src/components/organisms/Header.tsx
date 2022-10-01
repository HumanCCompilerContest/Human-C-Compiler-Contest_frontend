import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import * as React from 'react'

import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'

const Header = () => {
  const theme = useTheme()
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <IconButton
          size='large'
          aria-label='menu'
          sx={{ margin: '0 0.5rem 0 1rem' }}
          disabled
        >
          <Image src='/HCCC_logo.png' layout='fill' />
        </IconButton>

        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          HCCC
        </Typography>
        <ButtonWithIcon buttonLabel='Login' iconReactNode={<LoginIcon />} />
        <ButtonWithIcon
          buttonLabel='Register'
          iconReactNode={<HowToRegIcon />}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
