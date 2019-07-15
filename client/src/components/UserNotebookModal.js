import React, { Component } from 'react';
import {
  Modal,
  Button,
  Image,
  Header,
  Form,
  Checkbox,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const options = [
  { key: 's', text: 'Sealed', value: 0 },
  { key: 'u', text: 'Unsealed', value: 1 },
  { key: 'si', text: 'Single', value: 2 },
];

class UserNotebookModal extends Component {
  state = { quantity: 0, status: 0 };

  handleChange = e => console.log(this) && this.setState({ quantity: 2 });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { notebook } = this.props;
    return (
      <div>
        <Modal
          trigger={
            <Button basic color="green">
              Add to Collection
            </Button>
          }
        >
          <Modal.Header>{notebook.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={notebook.photo_url} />
            <Modal.Description>
              <Header>Add to your collection</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Field>
                <Form.Select
                  fluid
                  label="Type"
                  options={options}
                  placeholder="Type"
                  name="status"
                  onChange={this.handleChange}
                />
                <Button type="submit">Submit</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

UserNotebookModal.propTypes = {
  notebook: PropTypes.object,
};

export default UserNotebookModal;
