import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
        <Link href='/' passHref>
          <MuiLink
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              size='large'
              aria-label='menu'
              sx={{ margin: '0 0.5rem 0 1rem' }}
              disabled
            >
              <Image src='/HCCC_logo.png' layout='fill' />
            </IconButton>
            <Typography variant='h6' component='span' sx={{ color: 'white' }}>
              HCCC
            </Typography>
          </MuiLink>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Link href='/login' passHref>
          <MuiLink
            sx={{
              color: 'white',
            }}
          >
            <ButtonWithIcon buttonLabel='Login' iconReactNode={<LoginIcon />} />
          </MuiLink>
        </Link>

        <Link href='/register' passHref>
          <MuiLink
            sx={{
              color: 'white',
            }}
          >
            <ButtonWithIcon
              buttonLabel='Register'
              iconReactNode={<HowToRegIcon />}
            />
          </MuiLink>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
