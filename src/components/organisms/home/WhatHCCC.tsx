import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import DiscriptionCard from '@/components/molecules/DiscriptionCard'

type WhatHCCCProps = {
  sx?: SxProps<Theme>
}

const WhatHCCC: FC<WhatHCCCProps> = ({ sx }) => {
  return (
    <DiscriptionCard title='What is HCCC' sx={sx}>
      <p style={{ margin: 0 }}>
        人間Cコンパイラコンテスト(HCCC)とは文字通り競技者自身がCコンパイラとなり
        C言語からアセンブリを生成し，その時間と正確さを競う競技です．
      </p>
      <p>
        与えられるソースコードの中にはコンパイルエラーを出す必要の
        ある仕様上間違ったものも含まれています．
      </p>
      <p>
        このような場合にはコンパイルエラーとしてアセンブリの生成を拒否する必要があります．
      </p>
    </DiscriptionCard>
  )
}

export default WhatHCCC
