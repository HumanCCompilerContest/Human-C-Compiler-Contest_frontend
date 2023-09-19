import { Button, Box } from '@mui/material'
import type { ButtonProps } from '@mui/material/Button'
import type { SxProps, Theme } from '@mui/material/styles'
import { FC } from 'react'

export type ButtonWithIconProps = Omit<ButtonProps, 'onClick'> & {
  buttonLabel: string
  iconReactNode: React.ReactNode
  wrapSx?: SxProps<Theme>
  onClick: React.MouseEventHandler<HTMLElement>
}

const ButtonWithIcon: FC<ButtonWithIconProps> = (props) => {
  const { buttonLabel, iconReactNode, wrapSx, sx, onClick, ...leftProps } =
    props
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m: '0 0.5rem',
        cursor: 'pointer',
        ...wrapSx,
      }}
    >
      {iconReactNode}
      <Button
        color='inherit'
        {...leftProps}
        sx={{ verticalAlign: 'bottom', ...sx }}
      >
        {buttonLabel}
      </Button>
    </Box>
  )
}

export default ButtonWithIcon
