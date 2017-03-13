import React, { Component } from 'react'
import AuthService from '../services/authService'

export default class Signup extends Component {
  constructor(){
    super()
    this.input = {}
  }

  handleSubmit(e) {
    e.preventDefault()

    const { input } = this
    let user = {}

    for (let key of Object.keys(input)) {
      let value = input[key].value.trim()
      if (!!value) {
        user[key] = value
        continue
      }
    }
    AuthService.signup(user)
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
