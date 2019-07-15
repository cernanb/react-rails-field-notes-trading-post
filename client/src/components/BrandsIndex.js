import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BrandsIndex extends Component {
  render() {
    const { brands } = this.props;
    return (
      <Grid columns={3}>
        {brands.map(brand => (
          <Grid.Column key={brand.id}>
            <Card>
              <Image src={brand.photo_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  <Link to={`brands/${brand.id}`}>{brand.name}</Link>
                </Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default connect(state => ({ brands: state.brands }))(BrandsIndex);
