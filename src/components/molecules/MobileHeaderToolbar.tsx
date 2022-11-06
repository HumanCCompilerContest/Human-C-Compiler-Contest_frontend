import CreateIcon from '@mui/icons-material/Create'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PublishIcon from '@mui/icons-material/Publish'
import StarIcon from '@mui/icons-material/Star'
import type { SxProps, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, FC, useState } from 'react'
import { useSWRConfig } from 'swr'

import ButtonWithIcon from '@/components/molecules/ButtonWithIcon'
import LinkWithIcon from '@/components/molecules/LinkWithIcon'
import { AuthContext } from '@/components/templates/BasicLayout'
import { requestLogout } from '@/features/api'

type HeaderToolbarProps = {
  sx?: SxProps<Theme>
}

const MobileHeaderToolbar: FC<HeaderToolbarProps> = () => {
  const router = useRouter()
  const { cache } = useSWRConfig()
  const { user } = useContext(AuthContext)
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

    // キャッシュを削除しないとログイン済の状態となる
    cache.delete('/api/users/me')
    router.push('/login')
  }

  return (
    <Toolbar>
      <StyledLinkWithIcon
        href='/'
        iconReactNode={
          <IconButton
            size='large'
            aria-label='menu'
            sx={{ margin: '0 0.5rem 0 1rem' }}
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
      </StyledLinkWithIcon>

      {user && (
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
      )}

      <Box sx={{ flexGrow: 1 }} />

      <IconButton onClick={handleClick} sx={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>
          <StyledLinkWithIcon
            href='/ranking'
            iconReactNode={<StarIcon />}
            sx={{ marginRight: '1rem' }}
          >
            Ranking
          </StyledLinkWithIcon>
        </MenuItem>
        <MenuItem>
          <StyledLinkWithIcon
            href='/problems'
            iconReactNode={<CreateIcon />}
            sx={{ marginRight: '1rem' }}
          >
            Problem
          </StyledLinkWithIcon>
        </MenuItem>
        <MenuItem>
          <StyledLinkWithIcon
            href='/submissions'
            iconReactNode={<PublishIcon />}
          >
            Submission
          </StyledLinkWithIcon>
        </MenuItem>
        {user ? (
          <MenuItem>
            <ButtonWithIcon
              buttonLabel='Logout'
              iconReactNode={<LogoutIcon />}
              onClick={handleClickLogout}
              sx={{
                color: 'white',
              }}
            />
          </MenuItem>
        ) : (
          <>
            <MenuItem>
              <StyledLinkWithIcon
                href='/login'
                iconReactNode={<LoginIcon />}
                sx={{ marginRight: '1rem' }}
              >
                Login
              </StyledLinkWithIcon>
            </MenuItem>
            <MenuItem>
              {' '}
              <StyledLinkWithIcon
                href='/register'
                iconReactNode={<HowToRegIcon />}
                sx={{ marginRight: '1rem' }}
              >
                Register
              </StyledLinkWithIcon>
            </MenuItem>
          </>
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
}))

export default MobileHeaderToolbar
