import { Box, Typography } from '@mui/material'
import type { Theme, SxProps } from '@mui/material/styles'
import { FC } from 'react'

type AssemblyErrorProps = {
  errorMessage: string
  sx?: SxProps<Theme>
}

const AssemblyError: FC<AssemblyErrorProps> = ({ errorMessage, sx }) => {
  return (
    <Box sx={sx}>
      <Typography variant='h5' sx={{ fontWeight: '600' }}>
        Assembly error
      </Typography>
      <Box
        sx={{
          bgcolor: 'primary.main',
          p: '1rem',
          mt: '1rem',
          borderRadius: '6px',
          whiteSpace: 'pre-wrap',
        }}
      >
        <Typography
          sx={{
            color: 'white',
          }}
        >
          {errorMessage}
        </Typography>
      </Box>
    </Box>
  )
}

export default AssemblyError
