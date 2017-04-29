import React, { Component } from 'react'
import { getUserNotebooks } from '../actions/notebookActions'
import { bindActionCreators } from 'redux'
import AuthService from '../services/authService'
import { connect } from 'react-redux'
import { css } from 'glamor'
import { Link } from 'react-router'

const notebookCSS = css({
  width: '33%'
})

const linkCSS = css({
  'textDecoration': 'none',
  color: '#999',
  width: '80px',
  padding: '16px',
  ':hover': {
    color: '#383A3F'
  }
})

const notebookContainerCSS = css({
  display: 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap'
})

class UserNotebooks extends Component {

  componentWillMount() {
    if (!AuthService.isAuthenticated()) {
      this.props.router.push('/login')
    }
  }

  componentDidMount() {
    this.props.actions.getUserNotebooks()
  }

  render() {
    const { notebooks } = this.props
    return (
      <div {...notebookContainerCSS}>
        {
          notebooks.map(notebook => <p {...notebookCSS} key={notebook.id}>
              <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}`}}>
                {notebook.name}
              </Link>
            </p>)
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getUserNotebooks,
        }, dispatch)
    }
}

const mapStateToProps = (state) => {
  return {
    notebooks: state.notebooks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotebooks)
