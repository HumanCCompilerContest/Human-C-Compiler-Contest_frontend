import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'

import { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import ResultChip from '../atoms/ResultChip'
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
            <StyledTableCell component='th' align='center' variant='head'>
              Problem
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.problem.title}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center' variant='head'>
              Result
            </StyledTableCell>
            <StyledTableCell align='center'>
              <ResultChip result={submission.result} />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center' variant='head'>
              Score
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.result === 'AC' ? submission.problem.score : 0}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center' variant='head'>
              User
            </StyledTableCell>
            <StyledTableCell align='center'>
              {submission.user.name}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' align='center' variant='head'>
              DateTime
            </StyledTableCell>
            <StyledTableCell align='center'>
              {new Date(submission.time).toLocaleString('ja-JP')}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: 16,
    fontWeight: 900,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 600,
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
