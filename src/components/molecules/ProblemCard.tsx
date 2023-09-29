import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'
import Link from 'next/link'
import { FC } from 'react'
import { Problem, ProblemCardStatus } from '@/features/types'

type ProblemCardProps = {
  problem: Problem
  status: ProblemCardStatus
  sx?: SxProps<Theme>
}

const ProblemCard: FC<ProblemCardProps> = ({ problem, status, sx }) => {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor:
          status === 'ac'
            ? '#5cb85c'
            : status === 'wc'
            ? 'error.main'
            : status === 'error'
            ? '#ff8f00'
            : 'primary.main',
        color: 'white',
        textAlign: 'center',
        '&:hover': {
          opacity: 0.8,
        },
        ...sx,
      }}
    >
      <CardActionArea>
        <Link href={`/problems/${problem.id}`}>
          <CardContent>
            <Typography sx={{ m: '0.5rem 0 1rem' }}>{problem.title}</Typography>
            <Typography>{problem.score}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default ProblemCard
