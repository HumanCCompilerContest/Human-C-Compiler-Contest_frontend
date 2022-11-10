import { Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type TextWithIconProps = {
  sx?: SxProps<Theme>
  children: ReactNode
}

const TextWithIcon: FC<TextWithIconProps> = ({ sx, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default TextWithIcon
