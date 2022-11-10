import { Typography, Box } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

type FooterProps = {
  sx?: SxProps<Theme>
}

const Footer: FC<FooterProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        py: '3rem',
        position: 'sticky',
        top: '100vh',
        ...sx,
      }}
    >
      <Typography
        variant='subtitle1'
        component='div'
        align='center'
        sx={{ color: 'white' }}
      >
        Copyright © 2022 HCCC All Rights Reserved.
      </Typography>
    </Box>
  )
}

export default Footer
