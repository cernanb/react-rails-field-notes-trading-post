import React from 'react'
import { Link } from 'react-router'

const Navigation = () =>
(
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/topics">Topics</Link></li>
    <li><Link to="/signup">Signup</Link></li>
  </ul>
)

export default Navigation
