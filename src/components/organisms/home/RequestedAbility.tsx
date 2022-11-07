import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

import DiscriptionCard from '@/components/molecules/DiscriptionCard'

type RequestedAbilityProps = {
  sx?: SxProps<Theme>
}

const RequestedAbility: FC<RequestedAbilityProps> = ({ sx }) => {
  return (
    <DiscriptionCard title={`求められる\n技能・知識`} sx={sx}>
      <ul style={{ marginTop: 0 }}>
        <li>
          <span style={{ fontWeight: '800', color: '#f44336' }}>
            C言語の仕様に関する深い知識
          </span>
        </li>
        <li>アセンブリを書く技術</li>
        <li>ABIの知識</li>
        <li>x86_64アーキテクチャの知識</li>
        <li>コンパイラまわりのあれこれ</li>
        <li>慣れ（慣れ）</li>
      </ul>
    </DiscriptionCard>
  )
}

export default RequestedAbility
