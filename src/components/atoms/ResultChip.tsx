import { Box, CircularProgress, colors } from '@mui/material'
import { FC } from 'react'

type ResultChipProps = {
  result: string
}

const colorStyles = {
  AC: { bgcolor: '#5cb85c', color: 'white' },
  Pending: { bgcolor: '#eeeeee', color: 'black' },
  WC: { bgcolor: '#ff3939', color: 'white' },
}

const getColorStyle = (result: string) => {
  if (result === 'AC' || result === 'Pending' || result === 'WC')
    return colorStyles[result]
  else return { bgcolor: '#ffc107', color: 'white' }
}

const ResultChip: FC<ResultChipProps> = ({ result }) => {
  const colorStyle = getColorStyle(result)
  return (
    <Box
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '0.3rem 1rem',
        borderRadius: '5rem',
        ...colorStyle,
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
