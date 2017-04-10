import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthService from '../services/authService'
import { getNotebooks } from '../actions/notebookActions'
import Notebook from './Notebook'


class Notebooks extends Component {

    componentWillMount() {
      if (!AuthService.isAuthenticated()) {
        this.props.router.push('/login')
      }
    }

    componentDidMount() {
      this.props.actions.getNotebooks()
    }

    render() {
      return (
        <div>
          { this.props.notebooks.map(notebook => <Notebook key={notebook.id} {...notebook} />) }
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getNotebooks,
        }, dispatch)
    }
}

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebooks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks)
