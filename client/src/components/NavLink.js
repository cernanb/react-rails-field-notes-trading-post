import React from 'react'
import { Link } from 'react-router'
import { css } from 'glamor'

const linkCSS = css({
  'textDecoration': 'none',
  display: 'inline-block',
  color: 'ghostwhite',
  width: '80px',
  padding: '16px',
  ':hover': {
    color: '#383A3F'
  }
})

export default (props) => (
  <Link {...linkCSS} {...props} />
)
