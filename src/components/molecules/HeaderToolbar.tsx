import CreateIcon from '@mui/icons-material/Create'
import DoneIcon from '@mui/icons-material/Done'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import PublicIcon from '@mui/icons-material/Public'
import PublishIcon from '@mui/icons-material/Publish'
import StarIcon from '@mui/icons-material/Star'
import type { SxProps, Theme } from '@mui/material'
import {
  Typography,
  Toolbar,
  IconButton,
  Box,
  Menu,
  styled,
} from '@mui/material'
import MuiMenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useSWRConfig } from 'swr'

import TextWithIcon from '@/components/atoms/TextWithIcon'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'
import LinkWithIcon from '@/components/molecules/LinkWithIcon'
import { requestLogout } from '@/features/api'

type HeaderToolbarProps = {
  sx?: SxProps<Theme>
}

const HeaderToolbar: FC<HeaderToolbarProps> = ({ sx }) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const { user } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleSubmitClose = () => {
    setAnchorEl(null)
  }

  const handleClickLogout = async () => {
    const res = await requestLogout()
    if (res.status === 'ng') {
      console.error(res.errorMessage)
      return
    }

    // データの再検証をしないとログイン済の状態となる
    await mutate('/api/users/me')
    router.push('/login')
  }

  return (
    <Toolbar sx={sx}>
      <LinkWithIcon
        href='/'
        iconReactNode={
          <IconButton size='large' sx={{ m: '0 0.5rem 0 1rem' }} disabled>
            <Image src='/HCCC_logo.png' layout='fill' alt='HCCC Logo' />
          </IconButton>
        }
        sx={{ mr: '3rem' }}
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
        href='https://github.com/Alignof/HCCC_Tutorial'
        iconReactNode={<DoneIcon />}
        sx={{ mr: '1rem' }}
      >
        Tutorial
      </LinkWithIcon>

      <LinkWithIcon
        href='/ranking'
        iconReactNode={<StarIcon />}
        sx={{ mr: '1rem' }}
      >
        Ranking
      </LinkWithIcon>

      <LinkWithIcon
        href='/problems'
        iconReactNode={<CreateIcon />}
        sx={{ mr: '1rem' }}
      >
        Problem
      </LinkWithIcon>

      <Box>
        <ButtonWithIcon
          buttonLabel='Submit'
          iconReactNode={<PublishIcon />}
          onClick={handleSubmitClick}
          wrapSx={{
            '&:hover': {
              opacity: 0.6,
            },
          }}
          sx={{
            fontSize: '1rem',
          }}
        />
        <Menu open={open} anchorEl={anchorEl} onClose={handleSubmitClose}>
          <MenuItem>
            <StyledLinkWithIcon
              href='/submissions'
              iconReactNode={<PublicIcon />}
            >
              All Submit
            </StyledLinkWithIcon>
          </MenuItem>
          {user && (
            <MenuItem>
              <StyledLinkWithIcon
                href={`/submissions?user_id=${user.id}`}
                iconReactNode={<PublishIcon />}
              >
                My Submit
              </StyledLinkWithIcon>
            </MenuItem>
          )}
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {user ? (
        <>
          <TextWithIcon
            sx={{
              color: 'white',
              border: '2px solid white',
              borderRadius: '0.3rem',
              p: '0.5rem',
              mr: '2rem',
            }}
          >
            <PersonIcon sx={{ mr: '0.5rem' }} />
            <Typography
              sx={{
                p: '0.1rem',
              }}
            >
              {user.name}
            </Typography>
          </TextWithIcon>

          <ButtonWithIcon
            buttonLabel='Logout'
            iconReactNode={<LogoutIcon />}
            onClick={handleClickLogout}
            sx={{
              color: 'white',
              mr: '1rem',
            }}
          />
        </>
      ) : (
        <>
          <LinkWithIcon
            href='/login'
            iconReactNode={<LoginIcon />}
            sx={{ mr: '1rem' }}
          >
            Login
          </LinkWithIcon>
          <LinkWithIcon
            href='/register'
            iconReactNode={<HowToRegIcon />}
            sx={{ mr: '1rem' }}
          >
            Register
          </LinkWithIcon>
        </>
      )}
    </Toolbar>
  )
}

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const StyledLinkWithIcon = styled(LinkWithIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: '1rem',
}))

export default HeaderToolbar
