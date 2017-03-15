import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'



const Navigation = (props) =>
(
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/signup">Signup</Link></li>
    <li><Link to="/" onClick={() => props.actions.logout()}>Logout</Link></li>
  </ul>
)

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logout,
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
