import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpIcon from '@mui/icons-material/Help'
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

type QandAProps = {
  sx?: SxProps<Theme>
}

const QandA: FC<QandAProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Typography
        variant='h3'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          m: '10rem 0 5rem',
          '&::before, &::after': {
            content: '""',
            display: 'block',
            maxWidth: '5rem',
            borderTop: 'solid 2px',
            flexGrow: 1,
          },
          '&::before': {
            mr: '2rem',
          },
          '&::after': {
            ml: '2rem',
          },
        }}
      >
        Q&A
      </Typography>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          競技で使用できるCのバージョン, アーキテクチャを教えてください
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          C99, X86_64を採用しています.ABIの仕様はAMD64の仕様に従います.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          初心者でコンパイラの知識がありませんが,参加できますか？
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          大歓迎です.裏番組として入門編を流す予定ですので自分のレベル感に合わせて解説を聞いたり競技に戻ったりして頂いて構いません．
          低レイヤーに踏み出す第一歩としてご活用ください.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          AT&T記法とIntel記法のどちらも使えますか?
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          使えます.お好きな方で記述してください.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          詳細のルールはどこから確認できますか？
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <a
            href='https://github.com/Alignof/Human_C_Compiler_Contest'
            target='_blank'
            rel='noreferrer'
          >
            こちらのリンク
          </a>
          からご確認ください.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          コンパイラを自作して使用しても良いですか？
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          今回は任意のコンパイラの使用を禁止しています.
          ですが,将来的に自作コンパイラを使った別の方向性のコンテストも考えています.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          コンテスト中にWebページをを閲覧しても良いですか？
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <a
            href='https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf'
            target='_blank'
            rel='noreferrer'
          >
            C99規格書
          </a>
          ,{' '}
          <a
            href='https://uclibc.org/docs/psABI-x86_64.pdf'
            target='_blank'
            rel='noreferrer'
          >
            System V Application Binary
          </a>
          を除き禁止しています.
        </StyledAccordionDetails>
      </Accordion>

      <Accordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          悪意のあるコードを提出しても良いですか？
        </StyledAccordionSummary>
        <StyledAccordionDetails>勘弁してください</StyledAccordionDetails>
      </Accordion>
    </Box>
  )
}

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: '1rem',
  backgroundColor: 'rgba(0, 0, 0, .03)',
})

const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '2rem 1rem',
})

export default QandA
