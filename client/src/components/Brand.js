import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { addUserNotebook } from '../actions/notebookActions';

class Brand extends Component {
  render() {
    const { brand, notebooks, addUserNotebook, userNotebooks } = this.props;
    if (!brand) return null;
    const userNotebookIds = userNotebooks.map(notebook => notebook.id);
    return (
      <>
        <h2>{brand.name}</h2>
        <Grid columns={4}>
          {/* <Card.Group> */}
          {notebooks.map(notebook => (
            <Grid.Column>
              <Card style={{ padding: '15px' }}>
                <Image
                  centered
                  size="small"
                  src={notebook.photo_url && notebook.photo_url}
                />
                <Card.Content>
                  <Card.Header>{notebook.name}</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    {!userNotebookIds.includes(notebook.id) && (
                      <Button
                        onClick={() => addUserNotebook(notebook.id)}
                        basic
                        color="green"
                      >
                        Add to Collection
                      </Button>
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
          ))}
          {/* </Card.Group> */}
        </Grid>
      </>
    );
  }
}

Brand.propTypes = {
  brand: PropTypes.object,
  profile: PropTypes.object,
  notebooks: PropTypes.array,
  addUserNotebook: PropTypes.func,
};

export default connect(
  (state, props) => ({
    brand: state.brands.filter(b => b.id === +props.match.params.id)[0],
    notebooks: state.notebooks.allNotebooks.filter(
      notebook => notebook.brand_id === +props.match.params.id
    ),
    userNotebooks: state.notebooks.userNotebooks,
  }),
  { addUserNotebook }
)(Brand);
