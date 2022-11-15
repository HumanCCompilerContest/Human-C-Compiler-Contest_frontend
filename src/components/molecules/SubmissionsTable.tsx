import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import MuiLink from '@mui/material/Link'
import { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { FC } from 'react'

import ResultChip from '../atoms/ResultChip'
import { SubmissionJoined } from '@/features/types'

type SubmissionsTableProps = {
  submissionList: SubmissionJoined[]
}

const SubmissionsTable: FC<SubmissionsTableProps> = ({ submissionList }) => {
  return (
    <TableContainer component={Paper} sx={{ m: '3rem 0' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='left'>DateTime</StyledTableCell>
            <StyledTableCell align='right'>Name</StyledTableCell>
            <StyledTableCell align='right'>User</StyledTableCell>
            <StyledTableCell align='right'>Score</StyledTableCell>
            <StyledTableCell align='right'>Result</StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {submissionList.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component='th' scope='row' align='left'>
                {new Date(row.time).toLocaleString('ja-JP')}
              </StyledTableCell>
              <StyledTableCell align='right'>
                {row.problem.title}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.user.name}</StyledTableCell>
              <StyledTableCell align='right'>
                {row.result === 'AC' ? row.problem.score : 0}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <ResultChip result={row.result} />
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Link href={`/submissions/${row.id}`} passHref>
                  <MuiLink>詳細</MuiLink>
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
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    fontWeight: 700,
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
  '&:nth-of-type(even)': {
    backgroundColor: '#f5f5f5',
  },
}))

export default SubmissionsTable
