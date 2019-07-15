import React, { Component } from 'react';
import { Button, Card, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthService from '../services/authService';

class UserNotebooks extends Component {
  componentWillMount() {
    if (!AuthService.isAuthenticated()) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  render() {
    const { notebooks } = this.props;
    if (!notebooks && notebooks.length === 0) {
      return null;
    }
    return (
      <>
        <h2>My Collection</h2>
        <Grid columns={4}>
          {notebooks.map(notebook => (
            <Grid.Column key={notebook.id}>
              <Card style={{ padding: '15px', height: '350px' }}>
                <Image
                  centered
                  size="small"
                  src={notebook.photo_url && notebook.photo_url}
                />
                <Card.Content>
                  <Card.Header>{notebook.name}</Card.Header>
                  {notebook.statuses.map(s => (
                    <Card.Description key={s.status}>
                      {s.status.toUpperCase()}: {s.quantity}
                    </Card.Description>
                  ))}
                </Card.Content>
                <Card.Content extra>
                  <Button basic color="red">
                    Remove from Collection
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => ({
  notebooks: state.notebooks.userNotebooks.reduce((accum, notebook) => {
    if (
      !accum.find(
        n =>
          n.relationships.notebook.data.id ===
          notebook.relationships.notebook.data.id
      )
    ) {
      const relatedNotebook =
        state.notebooks.allNotebooks.find(
          n => notebook.relationships.notebook.data.id === n.id
        ) || {};
      const { attributes } = relatedNotebook;
      const transformed = {
        ...attributes,
        ...notebook,
        id: notebook.id,
        statuses: [{ ...notebook.attributes }],
        // photo_url: notebook,
      };
      return accum.concat(transformed);
    }
    return accum.map(n =>
      n.relationships.notebook.data.id ===
      notebook.relationships.notebook.data.id
        ? { ...n, statuses: n.statuses.concat(notebook.attributes) }
        : n
    );
  }, []),
});

UserNotebooks.propTypes = {
  history: PropTypes.object,
  notebooks: PropTypes.array,
};

export default connect(mapStateToProps)(UserNotebooks);
