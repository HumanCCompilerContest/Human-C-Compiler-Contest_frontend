import FeedIcon from '@mui/icons-material/Feed'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const JoinCondition = () => {
  return (
    <Box sx={{ margin: '4rem 0 8rem' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FeedIcon sx={{ width: '60px', height: '60px', marginRight: '1rem' }} />
        <Typography variant='h3'>参加条件</Typography>
      </Box>

      <Box sx={{ width: '600px', margin: '3rem auto' }}>
        <Typography variant='h6' sx={{ margin: '2rem 0 1rem' }}>
          <p>
            低レイヤに興味がある方からCコンパイラ自作勢までレベルを問わず募集します．
          </p>
          <p>
            裏番組として入門編を流す予定ですので自分のレベル感に合わせて解説を聞いたり競技に戻ったりして頂いて構いません．
            皆さんの参加をお待ちしています．
          </p>
          <p>
            参加ご希望の方は
            <a
              href='https://forms.gle/4UiJnoR6gRoCzkpT8'
              target='_blank'
              rel='noreferrer'
            >
              応募フォーム
            </a>
            の入力をお願いします。
          </p>
        </Typography>
      </Box>
    </Box>
  )
}

export default JoinCondition
