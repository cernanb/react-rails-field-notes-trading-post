import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import AuthService from '../services/authService'
import buttonCss from '../buttonCss'
import formCss from '../formCss'

class Login extends Component {
  constructor(){
    super()
    this.input = {}
  }

  componentWillMount() {
    if (AuthService.isAuthenticated()) {
      this.props.router.push('/')
    }
  }

  componentDidUpdate() {
    if (AuthService.isAuthenticated()) {
      this.props.router.push('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    const { input } = this
    const { login } = this.props.actions

    let user = {}

    for (let key of Object.keys(input)) {
      let value = input[key].value.trim()
      if (!!value) {
        user[key] = value
        continue
      }
    }
    return login(user)
  }

  render() {
    return (
      <div>
        <h1>{this.props.auth.err_message}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input {...formCss} type="text" ref={input => this.input.username = input} placeholder="username" /> <br /> <br />
          <input {...formCss} type="password" ref={input => this.input.password = input} placeholder="password" /> <br /> <br />
          <input {...buttonCss} type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            login,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)