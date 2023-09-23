import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { equalDateTime, formatDate, formatMillSeconds } from '@/features/utils'

type ContestTimeKind = 'before' | 'just-before' | 'in-session' | 'after'

const judgeContestTimeKind = (
  target: Date,
  startTime: Date,
  endTime: Date,
): ContestTimeKind => {
  const beforeOneDay = new Date(startTime.getTime())
  beforeOneDay.setDate(beforeOneDay.getDate() - 1)

  if (target > endTime) {
    return 'after'
  } else if (target > startTime) {
    return 'in-session'
  } else if (target > beforeOneDay) {
    return 'just-before'
  } else {
    return 'before'
  }
}

const Clock = () => {
  const [nowDate, setNowDate] = useState(new Date())

  const contestBeginDate = new Date(process.env.NEXT_PUBLIC_CONTEST_BEGIN || '')
  const contestEndDate = new Date(process.env.NEXT_PUBLIC_CONTEST_END || '')
  const contestTimeKind = judgeContestTimeKind(
    nowDate,
    contestBeginDate,
    contestEndDate,
  )

  const remainingTimeUntilStart = Math.max(
    contestBeginDate.getTime() - nowDate.getTime(),
    0,
  )
  const remainingTimeUntilEnd = Math.max(
    contestEndDate.getTime() - nowDate.getTime(),
    0,
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date()
      setNowDate(d)
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (equalDateTime(nowDate, contestBeginDate)) {
      /*
        NOTE: 残り１秒の表示でアラートが表示されるバグを修正する応急措置でsetTimeoutを使用
      */
      setTimeout(() => {
        alert('コンテストが開始しました')
      }, 10)
    } else if (equalDateTime(nowDate, contestEndDate)) {
      /*
        NOTE: 残り１秒の表示でアラートが表示されるバグを修正する応急措置でsetTimeoutを使用
      */
      setTimeout(() => {
        alert('コンテストが終了しました')
      }, 10)
    }
  }, [nowDate, contestBeginDate, contestEndDate])

  return createPortal(
    <Box
      sx={(theme) => ({
        width: '150px',
        height: '80px',
        padding: '10px',
        border: 'solid 10px',
        borderColor: theme.palette.primary.light,
        backgroundColor: grey[300],
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      {contestTimeKind === 'after' || contestTimeKind === 'before' ? (
        <Typography fontSize={14} textAlign='center'>
          {formatDate('%y/%m/%d', nowDate)}
          <br />
          {formatDate('%H:%M:%S', nowDate)}
        </Typography>
      ) : contestTimeKind === 'just-before' ? (
        <Typography fontSize={14} textAlign='center'>
          開始まで
          <br />
          {formatMillSeconds('%H:%M:%S', remainingTimeUntilStart)}
        </Typography>
      ) : (
        <Typography fontSize={14} textAlign='center'>
          残り時間
          <br />
          {formatMillSeconds('%H:%M:%S', remainingTimeUntilEnd)}
        </Typography>
      )}
    </Box>,
    document.getElementById('timer') as HTMLElement,
  )
}

export default Clock
