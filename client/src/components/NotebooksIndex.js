import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

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

const notebookCSS = css({
  width: '33%',
});

const notebookCardTitle = css({
  marginBottom: '-45px',
  position: 'relative'
});

const notebookContainerCSS = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

class NotebooksIndex extends Component {
  render() {
    const { notebooks } = this.props;
    return (
      <div {...notebookContainerCSS}>
        {notebooks.map(notebook => (
          <div {...notebookCSS} key={notebook.id}>
            <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}` }}>
              <p {...notebookCardTitle}>{notebook.edition}</p>
              <img
                {...imageCSS}
                src="https://fieldnotes.imgix.net/images/products/FNC-33-Black-Ice-A.jpg?auto=format&fit=crop&h=360&ixlib=php-1.1.0&q=55&w=400&s=00915ae492f9576f67bfa75e8fa70bcc"
              />
            </Link>
            <button
              onClick={() => this.props.actions.addUserNotebook(notebook.id)}
            >
              Add to Collection
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(({ notebooks }) => ({ notebooks }))(NotebooksIndex);
