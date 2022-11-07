import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import DiscriptionCard from '@/components/molecules/DiscriptionCard'

type WhatHCCCProps = {
  sx?: SxProps<Theme>
}

const WhatHCCC: FC<WhatHCCCProps> = ({ sx }) => {
  return (
    <DiscriptionCard title='What is HCCC' sx={sx}>
      <p style={{ m: 0 }}>
        人間Cコンパイラコンテストとは，文字通り競技者自身がCコンパイラとなってC言語からアセンブリを生成し，その時間と正確さを競う競技です．
      </p>
      <p>
        競技者はC言語のプログラムを渡され，それを見てコンパイルが通らなければ（C言語の仕様に則っていなければ）該当する最初の行を指摘し，コンパイルが通るようであればアセンブリを書いて提出します．
      </p>
      <p>
        最もスコアが高かったプレイヤが栄誉ある
        <span style={{ fontWeight: '800', color: '#f44336' }}>
          人間Cコンパイラの称号
        </span>
        を手に入れる．
      </p>
    </DiscriptionCard>
  )
}

export default WhatHCCC
