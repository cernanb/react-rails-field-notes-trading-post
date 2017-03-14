import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup } from '../actions/authActions'
import AuthService from '../services/authService'

class Signup extends Component {
  constructor(){
    super()
    this.input = {}
  }

  componentWillMount() {
    console.log(AuthService.isAuthenticated())
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
    const { signup } = this.props.actions

    let user = {}

    for (let key of Object.keys(input)) {
      let value = input[key].value.trim()
      if (!!value) {
        user[key] = value
        continue
      }
    }
    return signup(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => this.input.username = input} placeholder="username" /> <br /> <br />
          <input type="text" ref={input => this.input.email = input} placeholder="email" /> <br /> <br />
          <input type="password" ref={input => this.input.password = input} placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            signup,
        }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Signup)
