import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import MuiLink from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import * as React from 'react'

import { useSubmissionList } from '@/features/api'

const BasicTable = () => {
  const { submissionListResponse, isLoading } = useSubmissionList()

  if (isLoading || !submissionListResponse) {
    return (
      <Backdrop sx={{ color: '#fff' }} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }

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
          {submissionListResponse.items.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component='th' scope='row'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.user.name}</StyledTableCell>
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
