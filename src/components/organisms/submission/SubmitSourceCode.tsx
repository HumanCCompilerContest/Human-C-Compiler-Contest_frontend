import { Box, Typography } from '@mui/material'
import type { Theme, SxProps } from '@mui/material/styles'
import { FC } from 'react'
import Code from '@/components/atoms/Code'
import { SubmissionJoined } from '@/features/types'

type SubmitSourceCodeProps = {
  submission: SubmissionJoined
  sx?: SxProps<Theme>
}

const SubmitSourceCode: FC<SubmitSourceCodeProps> = ({ submission, sx }) => {
  return (
    <Box sx={sx}>
      <Typography variant='h4' sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        Source Code
      </Typography>
      {submission.isCE ? (
        <Typography
          sx={{
            display: 'inline-block',
            backgroundColor: '#ef9a9a',
            color: 'white',
            p: '0.5rem 1rem',
            borderRadius: '10rem',
            fontWeight: '800',
          }}
        >
          Compile Error Submitted
        </Typography>
      ) : (
        <Code language='assembly'>{submission.asm}</Code>
      )}
    </Box>
  )
}

export default SubmitSourceCode
