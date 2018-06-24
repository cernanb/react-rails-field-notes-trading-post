import React, { Component } from 'react'
import { getNotebook } from '../actions/notebookActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Notebook extends Component {
  render() {
    const { notebook } = this.props
    if (notebook) {
      return (
        <div>
          <h3>Brand: {notebook.name} </h3>
          <h3>Edition: {notebook.edition} </h3>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state, ownParams) => {
  const notebook = state.notebooks.find(notebook => notebook.id === +ownParams.match.params.id)
  return {
    notebook,
  }
}

export default connect(mapStateToProps)(Notebook)
