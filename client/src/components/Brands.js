import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BrandsIndex from './BrandsIndex';
import NewBrand from './NewBrand';
import Brand from './Brand';

class Brands extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/brands" component={BrandsIndex} />
        <Route path="/brands/new" component={NewBrand} />
        <Route path="/brands/:id" component={Brand} />
      </Switch>
    );
  }
}

export default Brands;
