import React, { Component } from 'react';
import { Button, Card, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserNotebookForm from './UserNotebookForm';

class NotebookCard extends Component {
  render() {
    const { notebook, userNotebookIds } = this.props;
    return (
      <Grid.Column key={notebook.id}>
        <Card style={{ padding: '15px' }}>
          <Image
            centered
            size="small"
            src={notebook.attributes.photo_url && notebook.attributes.photo_url}
          />
          <Card.Content>
            <Card.Header>{notebook.attributes.name}</Card.Header>
            {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
            {/* <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description> */}
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              {!userNotebookIds.includes(notebook.id) && (
                <UserNotebookForm notebook={notebook} />
              )}
              {userNotebookIds.includes(notebook.id) && (
                <Button basic color="red">
                  Remove from Collection
                </Button>
              )}
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

NotebookCard.propTypes = {
  notebook: PropTypes.object,
  userNotebookIds: PropTypes.array,
};

export default NotebookCard;
