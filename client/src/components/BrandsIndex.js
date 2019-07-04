import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

class BrandsIndex extends Component {
  render() {
    const { brands } = this.props;
    return (
      <Grid columns={3}>
        {brands.map(brand => (
          <Grid.Column>
            <Card>
              <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>{brand.name}</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default connect(state => ({ brands: state.brands }))(BrandsIndex);
