import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'

import HeaderToolbar from '@/components/molecules/HeaderToolbar'

const Header = () => {
  const theme = useTheme()

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <HeaderToolbar />
    </AppBar>
  )
}

export default Header
