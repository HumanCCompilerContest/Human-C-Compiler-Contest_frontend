import { Box } from '@mui/material'
import MuiLink from '@mui/material/Link'
import type { LinkProps } from '@mui/material/Link'
import Link from 'next/link'
import * as React from 'react'

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
          component='span'
          sx={{
            m: '0 0.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {iconReactNode}
        </Box>
        <Box
          component='span'
          sx={{
            display: 'inline-block',
            lineHeight: 1,
            '&:hover': { borderBottom: '1px solid white' },
          }}
        >
          {' '}
          {children}
        </Box>
      </MuiLink>
    </Link>
  )
}

export default LinkWithIcon
