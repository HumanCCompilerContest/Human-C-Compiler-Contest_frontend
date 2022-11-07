import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import { Ranking } from '@/features/types'

type RankingTableProps = {
  rankingList: Ranking[]
  sx?: SxProps<Theme>
}

const RankingTable: FC<RankingTableProps> = ({ sx, rankingList }) => {
  return (
    <TableContainer component={Paper} sx={{ m: '3rem 0', ...sx }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
              Rank
            </StyledTableCell>
            <StyledTableCell
              align='right'
              sx={{ fontWeight: 700, fontSize: '1.1rem' }}
            >
              Name
            </StyledTableCell>
            <StyledTableCell
              align='right'
              sx={{ fontWeight: 700, fontSize: '1.1rem' }}
            >
              Score
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rankingList.map((row) => (
            <StyledTableRow key={row.rank}>
              <StyledTableCell
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
    color: theme.palette.primary.main,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-child(even)': {
    backgroundColor: '#f5f5f5',
  },
}))

export default RankingTable
