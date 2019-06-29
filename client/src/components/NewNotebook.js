import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createNotebook } from "../actions/notebookActions"
import AuthService from "../services/authService"
import NotebookForm from "./NotebookForm"

class NewNotebook extends Component {
  // componentWillMount() {
  //   if (!AuthService.isAuthenticated()) {
  //     this.props.router.push('/login')
  //   }
  // }

  submit = values => {
    const { createNotebook } = this.props.actions

    createNotebook(values)
  }

  render() {
    return (
      <div>
        <h1>Create a new Notebook</h1>
        <NotebookForm onSubmit={this.submit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        createNotebook
      },
      dispatch
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewNotebook)
