import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react';

class Brand extends Component {
  render() {
    const { brand, notebooks } = this.props;
    if (!brand) return null;
    return (
      <>
        <h2>{brand.name}</h2>
        <Card.Group>
          {notebooks.map(notebook => (
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
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </>
    );
  }
}

export default connect((state, props) => ({
  brand: state.brands.filter(b => b.id === +props.match.params.id)[0],
  notebooks: state.notebooks.filter(
    notebook => notebook.brand_id === +props.match.params.id
  ),
}))(Brand);
