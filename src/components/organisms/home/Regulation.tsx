import RuleIcon from '@mui/icons-material/Rule'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const Regulation = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '3rem',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pb: '3rem',
        }}
      >
        <RuleIcon sx={{ mr: '1rem', fontSize: '3rem' }} />
        <Typography
          variant='h3'
          component='div'
          align='center'
          sx={{
            fontWeight: '800',
          }}
        >
          Regulation
        </Typography>
      </Box>

      <Alert
        variant='outlined'
        severity='success'
        sx={{
          color: 'white',
          mb: '1rem',
          lineHeight: '2rem',
          borderWidth: '3px',
        }}
      >
        <AlertTitle sx={{ fontWeight: '900' }}>許可項目</AlertTitle>
        <Typography component='div' sx={{ lineHeight: '2rem' }}>
          <ul>
            <li>
              仕様書の閲覧
              <ul>
                <li>
                  <Link
                    href='https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf](https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf'
                    sx={{ color: '#bbdefb' }}
                  >
                    C 規格書
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://uclibc.org/docs/psABI-x86_64.pdf](https://uclibc.org/docs/psABI-x86_64.pdf'
                    sx={{ color: '#bbdefb' }}
                  >
                    AMD64-ABI
                  </Link>
                </li>
              </ul>
            </li>
            <li>検証環境を使ってローカルでデバッグ</li>
            <li>gdbによるデバッグ</li>
            <li>人間による異常な最適化</li>
            <li>紙，鉛筆，電卓などを用いる</li>
          </ul>
        </Typography>
      </Alert>
      <Alert
        severity='error'
        variant='outlined'
        sx={{
          color: 'white',
          mb: '1rem',
          lineHeight: '2rem',
          borderWidth: '3px',
        }}
      >
        <AlertTitle sx={{ fontWeight: '900' }}>禁止事項</AlertTitle>
        <Typography component='div' sx={{ lineHeight: '2rem' }}>
          <ul>
            <li>gcc -sやgodboltなどのツールによる不正なコンパイル</li>
            <li>既存のコンパイラを使用すること</li>
            <li>オンラインのツールを使用すること</li>
            <li>コンパイラやツールを自作して使用すること</li>
            <li>他者と回答を共有すること</li>
            <li>アセンブリ内に特定の回答を不正に埋め込む行為</li>
          </ul>
        </Typography>
      </Alert>
    </Box>
  )
}

export default Regulation
