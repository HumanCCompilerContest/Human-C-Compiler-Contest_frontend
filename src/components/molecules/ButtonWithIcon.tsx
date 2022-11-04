import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import { FC } from 'react'

export type ButtonWithIconProps = ButtonProps & {
  buttonLabel: string
  iconReactNode: React.ReactNode
}

const ButtonWithIcon: FC<ButtonWithIconProps> = (props) => {
  const { buttonLabel, iconReactNode, sx, ...leftProps } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 0.5rem',
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
