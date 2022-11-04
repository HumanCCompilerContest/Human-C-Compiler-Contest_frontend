import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Schedule = () => {
  return (
    <Box sx={{ margin: '4rem 0' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CalendarMonthIcon
          sx={{ width: '60px', height: '60px', marginRight: '1rem' }}
        />
        <Typography variant='h3'>Schedule</Typography>
      </Box>

      <Box sx={{ width: '600px', margin: '3rem auto' }}>
        <Typography variant='h4' align='center'>
          2022年11月19日(土) 13:10 〜
        </Typography>
        <Typography variant='h6' sx={{ margin: '2rem 0 1rem' }}>
          SECCONCON(SECCON Contests)は SECCON Contest of Contest
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
