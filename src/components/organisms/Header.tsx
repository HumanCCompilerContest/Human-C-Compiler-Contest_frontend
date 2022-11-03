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
import CreateIcon from '@mui/icons-material/Create'
import StarIcon from '@mui/icons-material/Star'
import PublishIcon from '@mui/icons-material/Publish'
import { useContext } from 'react'

import { AuthContext } from '@/components/templates/BasicLayout'
import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'

const Header = () => {
  const theme = useTheme()
  const { user } = useContext(AuthContext)

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
              marginRight: '4rem',
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
        <Link href='/ranking' passHref>
          <MuiLink
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem',
            }}
          >
            <StarIcon
              fontSize='small'
              sx={{ marginRight: '0.2rem', color: 'white' }}
            />
            <Typography
              variant='subtitle1'
              component='span'
              sx={{
                color: 'white',
                '&:hover': { borderBottom: '1px solid white' },
              }}
            >
              ranking
            </Typography>
          </MuiLink>
        </Link>
        <Link href='/problems' passHref>
          <MuiLink
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem',
            }}
          >
            <CreateIcon
              fontSize='small'
              sx={{ marginRight: '0.2rem', color: 'white' }}
            />
            <Typography
              variant='subtitle1'
              component='span'
              sx={{
                color: 'white',
                '&:hover': { borderBottom: '1px solid white' },
              }}
            >
              problems
            </Typography>
          </MuiLink>
        </Link>
        <Link href='/submissions' passHref>
          <MuiLink
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem',
            }}
          >
            <PublishIcon
              fontSize='small'
              sx={{ marginRight: '0.2rem', color: 'white' }}
            />
            <Typography
              variant='subtitle1'
              component='span'
              sx={{
                color: 'white',
                '&:hover': { borderBottom: '1px solid white' },
              }}
            >
              submissions
            </Typography>
          </MuiLink>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {user ? (
          <Link href='/logout' passHref>
            <MuiLink
              sx={{
                color: 'white',
              }}
            >
              <ButtonWithIcon
                buttonLabel='Logout'
                iconReactNode={<LoginIcon />}
              />
            </MuiLink>
          </Link>
        ) : (
          <>
            <Link href='/login' passHref>
              <MuiLink
                sx={{
                  color: 'white',
                }}
              >
                <ButtonWithIcon
                  buttonLabel='Login'
                  iconReactNode={<LoginIcon />}
                />
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
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
