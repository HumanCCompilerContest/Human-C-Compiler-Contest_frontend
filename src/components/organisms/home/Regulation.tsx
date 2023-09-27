import RuleIcon from '@mui/icons-material/Rule'
import {
  Typography,
  Box,
  AlertTitle,
  Alert,
  useMediaQuery,
  Link,
} from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import Code from '@/components/atoms/Code'
import TextWithIcon from '@/components/atoms/TextWithIcon'

type RegulationProps = {
  sx?: SxProps<Theme>
}

const Regulation: FC<RegulationProps> = ({ sx }) => {
  const isUpMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        p: { xs: '1rem', md: '3rem' },
        borderRadius: '10px',
        ...sx,
      }}
    >
      <TextWithIcon
        sx={{
          pb: { xs: '1rem', md: '3rem' },
        }}
      >
        <RuleIcon sx={{ mr: '1rem', fontSize: '3rem' }} />
        <Typography
          variant={isUpMd ? 'h3' : 'h4'}
          component='div'
          align='center'
          sx={{
            fontWeight: '800',
          }}
        >
          Regulation
        </Typography>
      </TextWithIcon>

      <Box sx={{ lineHeight: '1.5rem' }}>
        <Typography>
          第3回大会では問題の掲載/提出を行う競技システムと手元でデバッグするための検証環境を用意して以下のような規則で実施する．
        </Typography>
        <Box sx={{ mb: '2rem' }}>
          <h3>A. 競技概要</h3>
          <div>
            <ol>
              <li>
                本コンテストは与えられたC言語のソースコードを決められた仕様に沿って解釈し対象となるアーキテクチャのアセンブリを出力する競技である．
              </li>
              <li>
                競技者は，与えられたソースコードが仕様上正しければ（コンパイル可能なら）アセンブリに変換し，ソースコードが仕様上正しくなければ（コンパイルエラーを出すべきなら），
                変換を行わずコンパイル不可であることと最初の行数を示す．
              </li>
              <li>
                第3回大会では以下の仕様を基準に競技を行う．
                <ol type='i'>
                  <li>
                    C言語の仕様は
                    <Link
                      href='https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf'
                      target='_blank'
                      sx={{
                        color: '#ffab91',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#1b5e20',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      C99
                    </Link>
                    に則る ．
                  </li>
                  <li>
                    ABIの仕様は
                    <Link
                      href='https://uclibc.org/docs/psABI-x86_64.pdf'
                      target='_blank'
                      sx={{
                        color: '#ffab91',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#1b5e20',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      System V Application Binary Interface
                    </Link>
                    の仕様に従う．
                  </li>
                  <li>対象アーキテクチャはx86_64とRISC-Vとする．</li>
                  <li>記法はAT&amp;Tとintel記法の双方を許可する．</li>
                  <li>アセンブラにはGNU assemblerを使用する</li>
                </ol>
              </li>
              <li>
                第3回大会では評価基準を以下のように定める．
                <ol type='i'>
                  <li>各問題に点数を与え，その得点で順位を決定する．</li>
                  <li>
                    得点が同じ場合は最後に正答した回答を提出した順番で順位づけを行う．
                  </li>
                  <li>
                    誤答した場合はその問題でACしたことにより得た得点から誤答の数に応じて減点する（誤答1回に対して1点減点）．減点はACした問題にのみ適用される（マイナスの得点にはならない）．
                  </li>
                  <li>
                    誤答のうちコンパイルできるはずのものにコンパイルエラーを出した場合（WCとなった場合），以後は提出が不可能となる．
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </Box>

        <Box sx={{ mb: '2rem' }}>
          <h3>B. 競技システム</h3>
          <div>
            <ol>
              <li>
                回答が正しいかどうかはジャッジシステムで行う．ジャッジシステムはテストケースを与えて判定を行ったり問題につけられた制約を確認したりする．
              </li>
              <li>
                ジャッジシステムは以下のいずれかの結果を返す．
                <ul>
                  <li>AC(Accepted): 正答．</li>
                  <li>WA(Wrong Answer): テストケースの出力が正しくない．</li>
                  <li>
                    WC(Wrong Compile error):
                    本来正しいプログラムにコンパイルエラーを出した．
                  </li>
                  <li>AE(Assembler Error): アセンブラのエラー．</li>
                  <li>LE(Linker Error): リンカのエラー．</li>
                  <li>RE(Runtime Error): 実行時のエラー．</li>
                  <li>TLE(Time Limit Exceeded): 実行制限時間オーバー．</li>
                  <li>Pending: ジャッジ待ち．</li>
                  <li>
                    SystemError:
                    上記以外のエラー．運営によるリジャッジが行われる可能性がある．
                  </li>
                </ul>
              </li>
              <li>
                ジャッジシステムはAE, LE,
                REなどの場合に各エラーを競技者に表示する．
              </li>
              <li>実行の制限時間は2000msとする．</li>
              <li>ジャッジは以下の環境で行われる．</li>
              <Code language='shell' showLineNumbers={false}>{`$ uname -a 
Linux 31d57f0f4274 6.5.4-arch2-1 #1 SMP PREEMPT_DYNAMIC Thu, 21 Sep 2023 11:06:39 +0000 x86\_64 GNU/Linux
$ lld --version
Debian GLIBC 2.31-13+deb11u6
$ gcc --version
gcc (GCC) 12.2.0
$ as --version
GNU assembler (GNU Binutils for Debian) 2.35.2
$ ld --version
GNU ld (GNU Binutils for Debian) 2.35.2`}</Code>
            </ol>
          </div>
        </Box>

        <Alert
          variant='outlined'
          severity='success'
          sx={{
            color: 'white',
            mb: '2rem',
            lineHeight: '2rem',
            borderWidth: '3px',
          }}
        >
          <AlertTitle sx={{ fontWeight: '900' }}>C. 許可事項</AlertTitle>
          <Typography>競技者は特に以下のことを許可される．</Typography>
          <Typography component='div'>
            <ol>
              <li>紙，鉛筆，電卓などを用いること．</li>
              <li>指定された仕様書の閲覧．</li>
              <li>指定された検証環境を使ってローカルでデバッグを行う．</li>
              <li>検証環境内での生成した実行ファイルに対するgdbの使用．</li>
              <li>人間による恣意的な最適化 ．</li>
            </ol>
          </Typography>
        </Alert>
        <Alert
          severity='error'
          variant='outlined'
          sx={{
            color: 'white',
            mb: '3rem',
            lineHeight: '2rem',
            borderWidth: '3px',
          }}
        >
          <AlertTitle sx={{ fontWeight: '900' }}>D. 禁止事項</AlertTitle>
          <Typography>競技者は特に以下のことを禁止される．</Typography>
          <Typography component='div'>
            <ol>
              <li>既存のコンパイラを使用すること．</li>
              <li>その他既存のツールを使用すること．</li>
              <li>コンパイラやツールを自作して使用すること．</li>
              <li>他者と回答を共有すること．</li>
              <li>回答にジャッジサーバを攻撃するような処理を埋め込むこと．</li>
            </ol>
          </Typography>
        </Alert>
      </Box>
    </Box>
  )
}

export default Regulation
