import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AuthService from '../services/authService'
import { getNotebooks } from '../actions/notebookActions'
import { css } from 'glamor'

const linkCSS = css({
  'textDecoration': 'none',
  color: '#999',
  width: '80px',
  padding: '16px',
  ':hover': {
    color: '#383A3F'
  }
})

const notebookCSS = css({
  width: '33%'
})

const notebookContainerCSS = css({
  display: 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap'
})

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
            <div {...notebookContainerCSS}>
              {
                notebooks.map(notebook => <p {...notebookCSS} key={notebook.id}>
                    <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}`}}>
                      {notebook.name}
                    </Link>
                  </p>)
              }
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
