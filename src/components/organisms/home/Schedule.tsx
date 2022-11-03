import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Schedule = () => {
  return (
    <Box>
      <Typography variant='h3'>Schedule</Typography>
      <Typography>2022年11月19日(土)</Typography>
      <Typography>
        SECCONCON(SECCON Contests)は SECCON Contest of Contest
        に応募された競技やコンテストの企画案・設計案を，実際に実施するイベントです．
      </Typography>
      <Typography>
        <Link
          href='https://www.seccon.jp/2022/seccon_contest/secconcon.html'
          target='_blank'
        >
          SECCONCON 2022
        </Link>
      </Typography>
    </Box>
  )
}

export default Schedule
