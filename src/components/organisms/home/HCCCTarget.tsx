import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import DiscriptionCard from '@/components/molecules/DiscriptionCard'

type HCCCTargetProps = {
  sx?: SxProps<Theme>
}

const HCCCTarget: FC<HCCCTargetProps> = ({ sx }) => {
  return (
    <DiscriptionCard title='競技の目的' sx={sx}>
      <p style={{ margin: 0 }}>
        この競技の目的は競技を通じてアセンブリやC言語の仕様，ABIと仲良くなることです．
      </p>
      <p>
        人力でCコンパイラと同じことをするというアプローチから普段使っているコンパイラの中身を解明し，アセンブリを書いて読んでデバッグすることで低レイヤの力をつけることを目標とします．
      </p>
    </DiscriptionCard>
  )
}

export default HCCCTarget
