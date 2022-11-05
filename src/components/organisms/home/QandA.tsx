import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpIcon from '@mui/icons-material/Help'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const QandA = () => {
  const theme = useTheme()
  return (
    <div>
      <Box
        sx={{
          margin: '10rem 0 5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' sx={{ fontWeight: '600' }}>
          - Q&A -
        </Typography>
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 0, .03)' }}
        >
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          <Typography>
            競技で使用できるCのバージョン, アーキテクチャを教えてください
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '2rem 1rem' }}>
          <Typography>
            C99, X86_64を採用しています。ABIの仕様はSystem Vの仕様に従います。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 0, .03)' }}
        >
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          <Typography>
            初心者でコンパイラの知識がありませんが、参加できますか？
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '2rem 1rem' }}>
          <Typography>
            大歓迎です。裏番組として入門編を流す予定ですので自分のレベル感に合わせて解説を聞いたり競技に戻ったりして頂いて構いません．
            開催一週間前までにはチュートリアルも用意する予定なので、そちらで予習も可能です。
            低レイヤーに踏み出す第一歩としてご活用ください。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 0, .03)' }}
        >
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          <Typography>AT&T記法とIntel記法のどちらも使えますか？</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '2rem 1rem' }}>
          <Typography>使えます。お好きな方で記述してください。</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 0, .03)' }}
        >
          <HelpIcon color='secondary' sx={{ mr: '1rem' }} />
          <Typography>詳細のルールはどこから確認できますか？</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '2rem 1rem' }}>
          <Typography>
            <a
              href='https://github.com/Alignof/Human_C_Compiler_Contest'
              target='_blank'
              rel='noreferrer'
            >
              こちらのリンク
            </a>
            からご確認ください。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default QandA
