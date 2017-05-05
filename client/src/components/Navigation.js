import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import AuthService from '../services/authService'
import { css } from 'glamor'
import NavLink from './NavLink'

let nav = css({ color: 'red', width: '100%', 'textAlign': 'center', background: '#F17F42'})
let navLink = css({display: 'inline-block'})

const Navigation = (props) => (
  <div {...nav}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    { AuthService.isAuthenticated() ?
      <div {...navLink}>
      <NavLink to="/" onClick={() => props.actions.logout()}>Logout</NavLink>
      <NavLink to="/notebooks">Notebooks</NavLink>
      <NavLink to="/user/notebooks">My Notebooks</NavLink>
      {AuthService.currentUser().admin ? <NavLink to="/notebooks/new">+ Notebooks</NavLink> : ''}
      </div>
        :
      <div {...navLink}>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      </div>
    }
  </div>
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
