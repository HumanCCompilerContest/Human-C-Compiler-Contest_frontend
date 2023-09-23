import { Box, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { formatDate } from '@/features/utils'

const Clock = () => {
  const [nowDate, setNowDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNowDate(new Date())
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return createPortal(
    <Box
      sx={(theme) => ({
        width: '150px',
        height: '80px',
        padding: '10px',
        border: 'solid 10px',
        borderColor: theme.palette.primary.light,
        backgroundColor: blueGrey[100],
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Typography fontSize={14} textAlign='center'>
        {formatDate('%y/%m/%d', nowDate)}
        <br />
        {formatDate('%H:%M:%S', nowDate)}
      </Typography>
    </Box>,
    document.getElementById('timer') as HTMLElement,
  )
}

export default Clock
