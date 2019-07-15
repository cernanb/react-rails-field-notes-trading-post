import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUserNotebook } from '../actions/notebookActions';

const options = [
  { key: 's', text: 'Sealed', value: 0 },
  { key: 'u', text: 'Unsealed', value: 1 },
  { key: 'si', text: 'Single', value: 2 },
];

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ];

class UserNotebookForm extends Component {
  state = { quantity: undefined, status: 0, editing: false };

  handleChangeSelect = (e, { value }) => {
    this.setState({ status: value });
  };

  handleChange = e => this.setState({ quantity: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { quantity, status } = this.state;
    const { addUserNotebook, notebook } = this.props;
    console.log('submitting', this.state);
    const userNotebook = { quantity, status, notebook_id: notebook.id };
    addUserNotebook(userNotebook);
  };

  render() {
    const { editing } = this.state;
    const content = editing ? (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Quantity"
            placeholder="Quantity"
            type="number"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Select
            fluid
            label="Status"
            options={options}
            placeholder="Status"
            onChange={this.handleChangeSelect}
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Button type="submit" basic color="green">
            Add
          </Form.Button>
          <Form.Button
            basic
            floated="right"
            color="red"
            onClick={() => this.setState({ editing: false })}
          >
            Cancel
          </Form.Button>
        </Form.Group>
      </Form>
    ) : (
      <Button
        onClick={() => this.setState({ editing: true })}
        basic
        color="green"
      >
        Add to Collection
      </Button>
    );
    return content;
  }
}

export default connect(
  null,
  { addUserNotebook }
)(UserNotebookForm);
