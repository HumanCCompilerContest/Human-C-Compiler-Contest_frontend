import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import DiscriptionCard from '@/components/molecules/DiscriptionCard'

type WhatHCCCProps = {
  sx?: SxProps<Theme>
}

const WhatHCCC: FC<WhatHCCCProps> = ({ sx }) => {
  return (
    <DiscriptionCard title='HCCCとは' sx={sx}>
      <p style={{ margin: 0 }}>
        <span style={{ color: 'red' }}>人間Cコンパイラコンテスト(HCCC)</span>
        とは文字通り競技者自身がCコンパイラとなり
        C言語からアセンブリを生成し，その時間と正確さを競う競技です．
      </p>
      <p>
        与えられるソースコードの中にはコンパイルエラーを出す必要の
        ある仕様上間違ったものも含まれています．このような場合にはコンパイルエラーと解答する必要があります。
      </p>
    </DiscriptionCard>
  )
}

export default WhatHCCC
