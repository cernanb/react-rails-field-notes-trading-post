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

const imageCSS = css({
  
})

const notebookCardTitle = css({
  marginBottom: '-45px',
  position: 'relative'
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
          notebooks.map(notebook => 
            <div {...notebookCSS} key={notebook.id}>
              <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}`}}>
                <p {...notebookCardTitle}>{notebook.edition}</p>
                <img  {...imageCSS} src="https://fieldnotes.imgix.net/images/products/FNC-32-Lunacy-A.jpg?auto=format&fit=crop&h=360&ixlib=php-1.1.0&q=55&w=400&s=0332b5fe718344668674db1c08d05741" />
              </Link>
            </div>)
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
