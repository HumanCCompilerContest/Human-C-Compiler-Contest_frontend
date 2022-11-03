import CreateIcon from '@mui/icons-material/Create'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PublishIcon from '@mui/icons-material/Publish'
import StarIcon from '@mui/icons-material/Star'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useContext } from 'react'
import { useSWRConfig } from 'swr'

import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'
import { AuthContext } from '@/components/templates/BasicLayout'
import { requestLogout } from '@/features/api'

const Header = () => {
  const theme = useTheme()
  const router = useRouter()
  const { cache } = useSWRConfig()
  const { user } = useContext(AuthContext)

  const handleClickLogout = async () => {
    const res = await requestLogout()
    if (res.status === 'ng') {
      console.error(res.errorMessage)
      return
    }

    // キャッシュを削除しないとログイン済の状態となる
    cache.delete('/api/users/me')
    router.push('/')
  }

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
          <>
            <Typography
              sx={{
                color: 'white',
                marginRight: '2rem',
                padding: '0.2rem 0.5rem',
                border: '2px solid white',
                borderRadius: '0.3rem',
              }}
            >
              {user.name}
            </Typography>
            <MuiLink
              onClick={handleClickLogout}
              sx={{
                color: 'white',
              }}
            >
              <ButtonWithIcon
                buttonLabel='Logout'
                iconReactNode={<LogoutIcon />}
              />
            </MuiLink>
          </>
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
