import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotebook } from '../actions/notebookActions';
import NotebookForm from './NotebookForm';

class NewNotebook extends Component {
  submit = notebook => {
    const { createNotebook, history } = this.props;

    createNotebook(notebook, history);
  };

  render() {
    const { brands } = this.props;
    return (
      <div>
        <h1>Create a new Notebook</h1>
        <NotebookForm brands={brands} handleSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  state => ({ brands: state.brands }),
  { createNotebook }
)(NewNotebook);
