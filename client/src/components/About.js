import React from 'react'
import { Link } from 'react-router'

const About = (props) => (
  <div>
    <h2>A Trading Post for All Things Analog</h2>
    <Link to='/about/details'>Details</Link>
    <Link to='/about/contact'>Contact</Link>
    {props.children}
  </div>
)

export default About
