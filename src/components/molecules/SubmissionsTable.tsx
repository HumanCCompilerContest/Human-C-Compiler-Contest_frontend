import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'

const createData = (
  dateTime: string,
  name: string,
  userName: string,
  score: number,
  result: string,
  id: number,
) => {
  return { dateTime, name, userName, score, result, id }
}

const rows = [
  createData('2001/1/1/11:11:11', 'Hello,world!!', 'karintou', 500, 'AC', 1),
  createData('2001/1/1/11:11:11', 'char literal', 'karintou', 400, 'AC', 2),
  createData('2001/1/1/11:11:11', 'number', 'karintou', 300, 'AC', 3),
  createData('2001/1/1/11:11:11', 'plus', 'karintou', 200, 'AC', 4),
  createData('2001/1/1/11:11:11', 'pointer', 'karintou', 100, 'AC', 5),
  createData('2001/1/1/11:11:11', 'deref', 'karintou', 0, 'WA', 6),
  createData('2001/1/1/11:11:11', 'tree', 'karintou', 0, 'TLE', 7),
  createData('2001/1/1/11:11:11', 'function', 'karintou', 0, 'RE', 8),
]

const BasicTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: '3rem 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>DateTime</StyledTableCell>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>User</StyledTableCell>
            <StyledTableCell align='left'>Score</StyledTableCell>
            <StyledTableCell align='left'>Result</StyledTableCell>
            <StyledTableCell align='left'></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component='th' scope='row'>
                {row.dateTime}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.name}</StyledTableCell>
              <StyledTableCell align='left'>{row.userName}</StyledTableCell>
              <StyledTableCell align='left'>{row.score}</StyledTableCell>
              <StyledTableCell align='left'>{row.result}</StyledTableCell>
              <StyledTableCell align='left'>
                <Link href={`/submissions/${row.id}`} passHref>
                  <MuiLink sx={{ color: 'white' }}>詳細</MuiLink>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid white`,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default BasicTable
