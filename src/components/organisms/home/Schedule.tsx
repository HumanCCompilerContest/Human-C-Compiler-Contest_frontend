import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Box, Typography, Link } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import TextWithIcon from '@/components/atoms/TextWithIcon'

type ScheduleProps = {
  sx?: SxProps<Theme>
}

const Schedule: FC<ScheduleProps> = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <TextWithIcon>
        <CalendarMonthIcon
          sx={{ width: '60px', height: '60px', marginRight: '1rem' }}
        />
        <Typography variant='h3'>Schedule</Typography>
      </TextWithIcon>

      <Box sx={{ width: { xs: '90%', md: '600px' }, m: '3rem auto' }}>
        <Typography variant='h4' align='center'>
          2023年9月30日(土) 15:20 〜
        </Typography>
        <Typography variant='h6' sx={{ m: '2rem 0 1rem' }}>
          第3回 人間CコンパイラコンテストはSECCONCONの1枠として開催されます.
          SECCONCON(SECCON Contests)は SECCON Contest of Contest
          に応募された競技やコンテストの企画案・設計案を，実際に実施するイベントです．
        </Typography>
        <Typography align='center' variant='h6'>
          <Link
            href='https://www.seccon.jp/2023/seccon_contest/secconcon_1.html'
            target='_blank'
            sx={{
              fontSize: '1.5rem',
              color: '#c00',
              textDecoration: 'none',
              '&:hover': { color: '#1b5e20', textDecoration: 'underline' },
            }}
          >
            SECCONCON 2023 (外部サイト)
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Schedule
