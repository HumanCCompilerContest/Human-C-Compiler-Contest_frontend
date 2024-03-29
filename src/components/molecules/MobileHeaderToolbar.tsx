import { Done } from '@mui/icons-material'
import CreateIcon from '@mui/icons-material/Create'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PersonIcon from '@mui/icons-material/Person'
import PublicIcon from '@mui/icons-material/Public'
import PublishIcon from '@mui/icons-material/Publish'
import StarIcon from '@mui/icons-material/Star'
import type { SxProps, Theme } from '@mui/material'
import { Box, IconButton, Menu, Toolbar, Typography } from '@mui/material'
import MuiMenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useSWRConfig } from 'swr'

import TextWithIcon from '../atoms/TextWithIcon'
import { useAuthContext } from '@/components/contexts/AuthProvider'
import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'
import LinkWithIcon from '@/components/molecules/LinkWithIcon'
import { requestLogout } from '@/features/api'

type HeaderToolbarProps = {
  sx?: SxProps<Theme>
}

const MobileHeaderToolbar: FC<HeaderToolbarProps> = ({ sx }) => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const { user } = useAuthContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickLogout = async () => {
    const res = await requestLogout()
    if (res.status === 'ng') {
      console.error(res.errorMessage)
      return
    }

    // キャッシュクリア
    await mutate(() => true, undefined, { revalidate: false })
    // データの再検証をしないとログイン済の状態となる
    await mutate('/api/users/me')
    router.push('/login')
  }

  return (
    <Toolbar sx={sx}>
      <StyledLinkWithIcon
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
      </StyledLinkWithIcon>

      <Box sx={{ flexGrow: 1 }} />

      {user && (
        <TextWithIcon
          sx={{
            color: 'white',
            border: '2px solid white',
            borderRadius: '0.3rem',
            p: '0.5rem',
            mr: '1rem',
          }}
        >
          <PersonIcon sx={{ mr: '0.5rem' }} />
          <Typography
            variant='subtitle1'
            sx={{
              p: '0.1rem',
            }}
          >
            {user.name}
          </Typography>
        </TextWithIcon>
      )}

      <IconButton onClick={handleClick} sx={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>
          <StyledLinkWithIcon href='/ranking' iconReactNode={<StarIcon />}>
            Ranking
          </StyledLinkWithIcon>
        </MenuItem>
        <MenuItem>
          <StyledLinkWithIcon href='/problems' iconReactNode={<CreateIcon />}>
            Problem
          </StyledLinkWithIcon>
        </MenuItem>
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
        <MenuItem>
          <StyledLinkWithIcon
            href='https://github.com/Alignof/HCCC_Tutorial'
            target='_blank'
            rel='noreferrer'
            iconReactNode={<Done />}
          >
            Tutorial
          </StyledLinkWithIcon>
        </MenuItem>
        {user && (
          <MenuItem>
            <ButtonWithIcon
              buttonLabel='Logout'
              iconReactNode={<LogoutIcon />}
              onClick={handleClickLogout}
            />
          </MenuItem>
        )}
        {!user && (
          <MenuItem>
            <StyledLinkWithIcon href='/login' iconReactNode={<LoginIcon />}>
              Login
            </StyledLinkWithIcon>
          </MenuItem>
        )}
        {!user && (
          <MenuItem>
            <StyledLinkWithIcon
              href='/register'
              iconReactNode={<HowToRegIcon />}
            >
              Register
            </StyledLinkWithIcon>
          </MenuItem>
        )}
      </Menu>
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

export default MobileHeaderToolbar
