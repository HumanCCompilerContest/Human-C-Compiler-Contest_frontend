import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import * as React from 'react'

import { useRanking } from '@/features/api'

const BasicTable = () => {
  const { rankingResponse, isLoading } = useRanking()

  if (isLoading || !rankingResponse) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

  const rankingList = rankingResponse.items

  return (
    <TableContainer component={Paper} sx={{ margin: '3rem 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align='right'>Name</StyledTableCell>
            <StyledTableCell align='right'>Score</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rankingList.map((row) => (
            <StyledTableRow
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell
                component='th'
                scope='row'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {row.rank === 1 ? (
                  <EmojiEventsIcon fontSize='large' sx={{ color: '#ffeb3b' }} />
                ) : row.rank === 2 ? (
                  <EmojiEventsIcon fontSize='large' sx={{ color: '#9e9e9e' }} />
                ) : row.rank === 3 ? (
                  <EmojiEventsIcon fontSize='large' sx={{ color: '#8d6e63' }} />
                ) : null}
                <span style={{ marginLeft: '0.5rem', fontSize: '1.1rem' }}>
                  {row.rank}
                </span>
              </StyledTableCell>
              <StyledTableCell align='right'>{row.userName}</StyledTableCell>
              <StyledTableCell align='right'>{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: 'white',
    color: theme.palette.primary.main,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default BasicTable
