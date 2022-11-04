import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

type TitleLabelProps = {
  label: string
  sx?: SxProps<Theme>
}

const TitleLabel: FC<TitleLabelProps> = ({ label, sx }) => {
  const theme = useTheme()
  return (
    <Typography
      variant='h4'
      sx={{
        fontWeight: '600',
        padding: '1rem',
        borderLeft: `10px solid ${theme.palette.secondary.main}`,
        backgroundColor: '#efefef',
        ...sx,
      }}
    >
      {label}
    </Typography>
  )
}

export default TitleLabel
