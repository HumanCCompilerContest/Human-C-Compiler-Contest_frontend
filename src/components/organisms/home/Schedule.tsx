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

      <Box sx={{ width: { xs: '90%', md: '600px' }, margin: '3rem auto' }}>
        <Typography variant='h4' align='center'>
          2022年11月19日(土) 13:10 〜
        </Typography>
        <Typography variant='h6' sx={{ margin: '2rem 0 1rem' }}>
          HCCCはSECCONCONの一種目として開催されます。 SECCONCON(SECCON
          Contests)は SECCON Contest of Contest
          に応募された競技やコンテストの企画案・設計案を，実際に実施するイベントです．
        </Typography>
        <Typography align='center'>
          <Link
            href='https://www.seccon.jp/2022/seccon_contest/secconcon.html'
            target='_blank'
          >
            SECCONCON 2022
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Schedule
