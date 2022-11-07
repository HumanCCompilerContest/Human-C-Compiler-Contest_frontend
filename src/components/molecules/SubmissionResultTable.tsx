import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import { SubmissionJoined } from '@/features/types'

type SubmissionResultTableProps = {
  submission: SubmissionJoined
}

const SubmissionResultTable: FC<SubmissionResultTableProps> = ({
  submission,
}) => {
  return (
    <TableContainer component={Paper} sx={{ m: '3rem 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component='th' align='center'>
              Problem
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.problem.title}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center'>
              Result
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.result}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center'>
              Score
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.problem.score}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center'>
              User
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.user.name}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center'>
              DateTime
            </StyledTableCell>
            <StyledTableCell align='center'>{submission.time}</StyledTableCell>
          </StyledTableRow>
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
    fontSize: 18,
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

export default SubmissionResultTable
