import React from 'react'
import { Link } from 'react-router'

var linkCSS = ({
  // 'text-decoration': 'none',
  // display: 'inline-block',
  // color: 'ghostwhite',
  // width: '80px',
  // padding: '16px',
  cursor: 'pointer',
})

export default (props) => (
  <Link {...linkCSS} {...props} />
)
