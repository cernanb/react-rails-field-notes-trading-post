import React from 'react'
import AuthService from '../services/authService'
import { connect } from 'react-redux'

const Home = (props) => (
  <div>
    {console.log(props)}
    {AuthService.isAuthenticated() ? <h1>Welcome {props.profile.username}</h1> : <h1>Please login or signup</h1>}
  </div>
)

const mapStateToProps = (state) => {

  return {
    profile: state.auth.profile
  }
}

export default connect(mapStateToProps)(Home)
