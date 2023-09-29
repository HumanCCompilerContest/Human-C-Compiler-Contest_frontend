import { Box, Typography } from '@mui/material'
import type { Theme, SxProps } from '@mui/material/styles'
import { FC } from 'react'

type AssemblyErrorProps = {
  result: string
  errorMessage: string
  sx?: SxProps<Theme>
}

const AssemblyError: FC<AssemblyErrorProps> = ({
  result,
  errorMessage,
  sx,
}) => {
  return (
    <Box sx={sx}>
      <Typography variant='h5' sx={{ fontWeight: '600' }}>
        {result === 'AE'
          ? 'Assembly Error'
          : result === 'LE'
          ? 'Linker Error'
          : result === 'RE'
          ? 'Runtime Error'
          : result === 'TLE'
          ? 'Time Limit Exceeded'
          : result === 'WC'
          ? 'Wrong Compile Error'
          : result === 'WA'
          ? 'Wrong Answer'
          : 'Other Error'}
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
          {errorMessage.replaceAll(/\n*$/g, '') /* 文末の改行を消して表示 */}
        </Typography>
      </Box>
    </Box>
  )
}

export default AssemblyError
