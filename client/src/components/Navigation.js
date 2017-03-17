import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import AuthService from '../services/authService'

const Navigation = (props) => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>

    { AuthService.isAuthenticated() ?
      <div>
        <li><Link to="/" onClick={() => props.actions.logout()}>Logout</Link></li>
        <li><Link to ="/notebooks">Notebooks</Link></li>
      </div>
        :
      <div>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </div>
    }
  </ul>
)

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logout,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
