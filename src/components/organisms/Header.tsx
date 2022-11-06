import { useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'

import MobileHeaderToolbar from '../molecules/MobileHeaderToolbar'
import HeaderToolbar from '@/components/molecules/HeaderToolbar'

const Header = () => {
  const theme = useTheme()
  const match = useMediaQuery('(min-width:577px)')

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      {match ? <HeaderToolbar /> : <MobileHeaderToolbar />}
    </AppBar>
  )
}

export default Header
