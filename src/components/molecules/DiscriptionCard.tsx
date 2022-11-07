import { Box, Card, CardContent, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type DiscriptionCardProps = {
  title: string
  children: ReactNode
  sx?: SxProps<Theme>
}

const DiscriptionCard: FC<DiscriptionCardProps> = ({ title, children, sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        ...sx,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '300px',
          height: '250px',
          p: '1rem 0',
          backgroundColor: 'primary.main',
        }}
      >
        <CardContent>
          <Typography
            variant='h4'
            component='div'
            align='center'
            sx={{
              fontWeight: '800',
              p: '1rem 0',
              color: 'white',
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant='h6'
        component='div'
        sx={{
          p: { xs: '3rem 2rem', md: '0 5rem' },
          fontWeight: '600',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default DiscriptionCard
