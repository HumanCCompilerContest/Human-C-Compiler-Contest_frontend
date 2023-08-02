import { Switch as MUISwitch } from '@mui/material'
import type { Theme, SxProps } from '@mui/material/styles'
import { FC } from 'react'

type SwitchProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  sx?: SxProps<Theme>
}

const Switch: FC<SwitchProps> = ({ checked, onChange, sx }) => {
  return (
    <MUISwitch
      checked={checked}
      onChange={(_, checked) => {
        onChange?.(checked)
      }}
      sx={{
        width: '62px',
        height: '34px',
        padding: '7px',
        '& .MuiSwitch-switchBase': {
          margin: '1px',
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& + .MuiSwitch-track': {
              opacity: 0.4,
              backgroundColor: '#ff3939',
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: '#ff3939',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: '#fff',
          width: '32px',
          height: '32px',
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#8796A5',
          borderRadius: 20 / 2,
        },
        ...sx,
      }}
    />
  )
}

export default Switch
