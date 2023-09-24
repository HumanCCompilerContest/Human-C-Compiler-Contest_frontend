import { Backdrop, CircularProgress } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

type LoadingProps = {
  sx?: SxProps<Theme>
}

const Loading: FC<LoadingProps> = ({ sx }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open>
      <CircularProgress color='inherit' sx={sx} />
    </Backdrop>
  )
}

export default Loading
