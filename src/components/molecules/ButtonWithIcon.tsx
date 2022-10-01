import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import * as React from 'react'

type ButtonWithIconProps = {
  buttonLabel: string
  iconReactNode: React.ReactNode
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = (props) => {
  const { buttonLabel, iconReactNode } = props
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
      <Button color='inherit'>{buttonLabel}</Button>
    </Box>
  )
}

export default ButtonWithIcon
