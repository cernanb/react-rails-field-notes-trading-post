import React, { Component } from 'react'
import { getNotebook } from '../actions/notebookActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Notebook extends Component {

  componentDidMount() {
    this.props.actions.getNotebook(this.props.params.id)
  }

  render() {
    const { notebook } = this.props
    return (
      <div>
        <h3>Brand: {notebook.name} </h3>
        <h3>Edition: {notebook.edition} </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notebook: state.selectedNotebook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getNotebook
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook)
