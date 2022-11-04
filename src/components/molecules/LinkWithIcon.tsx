import MuiLink, { LinkProps } from '@mui/material/Link'
import * as React from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'

type LinkWithIconProps = LinkProps & {
  href: string
  color?: string
  iconReactNode?: React.ReactNode
  children?: React.ReactNode
}

const LinkWithIcon: React.FC<LinkWithIconProps> = (props) => {
  const {
    href,
    iconReactNode,
    color = 'white',
    children,
    sx,
    ...leftProps
  } = props
  return (
    <Link href={href} passHref>
      <MuiLink
        {...leftProps}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: color,
          textDecoration: 'none',
          ...sx,
        }}
      >
        <Box
          sx={{
            margin: '0 0.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {iconReactNode}
        </Box>
        <Box sx={{ '&:hover': { borderBottom: '1px solid white' } }}>
          {' '}
          {children}
        </Box>
      </MuiLink>
    </Link>
  )
}

export default LinkWithIcon
