import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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
      const { children, notebooks } = this.props
      return (
        <div>
          {
            !children ?
            <div>
              {notebooks.map(notebook => <p key={notebook.id}><Link to={{ pathname: `/notebooks/${notebook.id}`}}>{notebook.name}</Link></p>)}
            </div> :
            <div>
              {children}
            </div>
          }
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
