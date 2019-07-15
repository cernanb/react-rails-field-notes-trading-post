import React from 'react';
import { Link } from 'react-router-dom';

// const linkCSS = css({
//   textDecoration: 'none',
//   display: 'inline-block',
//   color: 'ghostwhite',
//   width: '80px',
//   padding: '16px',
//   ':hover': {
//     color: '#383A3F',
//   },
// })

const NavLink = props => <Link {...props} />;

export default NavLink;
