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
      <Typography
        variant='h3'
        component='div'
        align='center'
        sx={{
          fontWeight: '800',
          paddingBottom: '3rem',
        }}
      >
        Regulation
      </Typography>
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
        <ul>
          <li>
            <Typography>仕様書の閲覧</Typography>
          </li>
          <li>
            <ul>
              <li>
                <Link
                  href='https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf](https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf'
                  color='primary'
                >
                  C 仕様書
                </Link>
              </li>
              <li>
                <Link
                  href='https://uclibc.org/docs/psABI-x86_64.pdf](https://uclibc.org/docs/psABI-x86_64.pdf'
                  color='primary'
                >
                  AMD64-ABI
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Typography>検証環境を使ってローカルでデバッグ</Typography>
          </li>
          <li>
            <Typography> gdbによるデバッグ</Typography>
          </li>
          <li>
            <Typography>人間による異常な最適化</Typography>
          </li>
          <li>
            <Typography>紙，鉛筆，電卓などを用いる</Typography>
          </li>
        </ul>
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
        <ul>
          <li>
            <Typography>
              gcc -sやgodboltなどのツールによる不正なコンパイル
            </Typography>
          </li>
          <li>
            <Typography>既存のコンパイラを使用すること</Typography>
          </li>
          <li>
            <Typography>オンラインのツールを使用すること</Typography>
          </li>
          <li>
            <Typography>コンパイラやツールを自作して使用すること</Typography>
          </li>
          <li>
            <Typography>他者と回答を共有すること</Typography>
          </li>
          <li>
            <Typography>
              アセンブリ内に特定の回答を不正に埋め込む行為
            </Typography>
          </li>
        </ul>
      </Alert>
    </Box>
  )
}

export default Regulation
