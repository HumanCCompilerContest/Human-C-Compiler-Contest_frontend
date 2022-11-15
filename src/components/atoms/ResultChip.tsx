import { Box, CircularProgress } from '@mui/material'
import { FC } from 'react'

type ResultChipProps = {
  result: string
}

const ResultChip: FC<ResultChipProps> = ({ result }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '0.3rem 1rem',
        borderRadius: '5rem',
        bgcolor:
          result === 'AC'
            ? '#5cb85c'
            : result === 'Pending'
            ? '#eeeeee'
            : '#ffc107',
        color: result === 'Pending' ? 'black' : 'white',
      }}
    >
      <span> {result}</span>
      {result === 'Pending' && (
        <CircularProgress size={16} sx={{ ml: '0.5rem' }} />
      )}
    </Box>
  )
}

export default ResultChip
