import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { css } from 'glamor';
import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import { getUserNotebooks } from '../actions/notebookActions';

const notebookCSS = css({
  width: '33%',
});

const linkCSS = css({
  textDecoration: 'none',
  color: '#999',
  width: '80px',
  padding: '16px',
  ':hover': {
    color: '#383A3F',
  },
});

const imageCSS = css({});

const notebookCardTitle = css({
  marginBottom: '-45px',
  position: 'relative',
});

const notebookContainerCSS = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

class UserNotebooks extends Component {
  componentWillMount() {
    if (!AuthService.isAuthenticated()) {
      this.props.router.push('/login');
    }
  }

  componentDidMount() {
    this.props.actions.getUserNotebooks();
  }

  render() {
    const { notebooks } = this.props;

    if (!notebooks) {
      return null;
    }
    return (
      <div {...notebookContainerCSS}>
        {notebooks.map(notebook => (
          <div {...notebookCSS} key={notebook.id}>
            <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}` }}>
              <p {...notebookCardTitle}>{notebook.edition}</p>
              <img {...imageCSS} src={notebook.photo_url} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getUserNotebooks,
    },
    dispatch
  ),
});

const mapStateToProps = state => ({
  notebooks: state.auth.profile.notebooks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNotebooks);
