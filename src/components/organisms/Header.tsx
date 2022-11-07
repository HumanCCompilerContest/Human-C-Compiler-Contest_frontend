import { useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import type { Theme, SxProps } from '@mui/material/styles'
import { FC } from 'react'

import MobileHeaderToolbar from '../molecules/MobileHeaderToolbar'
import HeaderToolbar from '@/components/molecules/HeaderToolbar'

type HeaderProps = {
  sx?: SxProps<Theme>
}

const Header: FC<HeaderProps> = ({ sx }) => {
  const isUpMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'))

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'primary.main',
        ...sx,
      }}
    >
      {isUpMd ? <HeaderToolbar /> : <MobileHeaderToolbar />}
    </AppBar>
  )
}

export default Header
