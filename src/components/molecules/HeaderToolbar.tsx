import CreateIcon from '@mui/icons-material/Create'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PublishIcon from '@mui/icons-material/Publish'
import StarIcon from '@mui/icons-material/Star'
import type { SxProps, Theme } from '@mui/material'
import { Typography, Toolbar, IconButton, Box } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, FC } from 'react'
import { useSWRConfig } from 'swr'

import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'
import LinkWithIcon from '@/components/molecules/LinkWithIcon'
import { AuthContext } from '@/components/templates/BasicLayout'
import { requestLogout } from '@/features/api'

type HeaderToolbarProps = {
  sx?: SxProps<Theme>
}

const HeaderToolbar: FC<HeaderToolbarProps> = () => {
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
    router.push('/login')
  }

  return (
    <Toolbar>
      <LinkWithIcon
        href='/'
        iconReactNode={
          <IconButton
            size='large'
            aria-label='menu'
            sx={{ m: '0 0.5rem 0 1rem' }}
            disabled
          >
            <Image src='/HCCC_logo.png' layout='fill' />
          </IconButton>
        }
        sx={{ marginRight: '3rem' }}
      >
        <Typography
          variant='h6'
          component='span'
          sx={{ color: 'white', lineHeight: '1', display: 'inline-block' }}
        >
          HCCC
        </Typography>
      </LinkWithIcon>

      <LinkWithIcon
        href='/ranking'
        iconReactNode={<StarIcon />}
        sx={{ marginRight: '1rem' }}
      >
        Ranking
      </LinkWithIcon>

      <LinkWithIcon
        href='/problems'
        iconReactNode={<CreateIcon />}
        sx={{ marginRight: '1rem' }}
      >
        Problem
      </LinkWithIcon>
      <LinkWithIcon href='/submissions' iconReactNode={<PublishIcon />}>
        Submission
      </LinkWithIcon>

      <Box sx={{ flexGrow: 1 }} />

      {user ? (
        <>
          <Typography
            sx={{
              color: 'white',
              marginRight: '2rem',
              p: '0.2rem 0.5rem',
              border: '2px solid white',
              borderRadius: '0.3rem',
            }}
          >
            {user.name}
          </Typography>
          <ButtonWithIcon
            buttonLabel='Logout'
            iconReactNode={<LogoutIcon />}
            onClick={handleClickLogout}
            sx={{
              color: 'white',
            }}
          />
        </>
      ) : (
        <>
          <LinkWithIcon
            href='/login'
            iconReactNode={<LoginIcon />}
            sx={{ marginRight: '1rem' }}
          >
            Login
          </LinkWithIcon>
          <LinkWithIcon
            href='/register'
            iconReactNode={<HowToRegIcon />}
            sx={{ marginRight: '1rem' }}
          >
            Register
          </LinkWithIcon>
        </>
      )}
    </Toolbar>
  )
}

export default HeaderToolbar
