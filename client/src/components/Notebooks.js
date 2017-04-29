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

const imageCSS = css({
   
})

const notebookCSS = css({
  width: '33%'
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
          notebooks.map(notebook => 
            <div {...notebookCSS} key={notebook.id}>
              <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}`}}>
                <p {...notebookCardTitle}>{notebook.edition}</p>
                <img  {...imageCSS} src="https://fieldnotes.imgix.net/images/products/FNC-33-Black-Ice-A.jpg?auto=format&fit=crop&h=360&ixlib=php-1.1.0&q=55&w=400&s=00915ae492f9576f67bfa75e8fa70bcc" />
              </Link>
            </div>)
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
