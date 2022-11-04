import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import * as React from 'react'

const createData = (rank: number, name: string, score: number) => {
  return { rank, name, score }
}

const rows = [
  createData(1, 'mirenk1', 5000),
  createData(2, '_AlignOf1', 4000),
  createData(3, 'mirenk2', 3000),
  createData(4, '_AlignOf2', 2000),
  createData(5, 'mirenk3', 1000),
  createData(6, '_AlignOf3', 0),
  createData(7, 'karintou', 0),
  createData(8, 'karintou', 0),
  createData(9, 'karintou', 0),
  createData(10, 'karintou', 0),
  createData(11, 'karintou', 0),
  createData(12, 'karintou', 0),
  createData(13, 'karintou', 0),
]

const BasicTable = () => {
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
          {rows.map((row) => (
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
              <StyledTableCell align='right'>{row.name}</StyledTableCell>
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
