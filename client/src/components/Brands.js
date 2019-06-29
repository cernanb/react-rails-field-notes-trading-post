import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import AuthService from '../services/authService';
import { getBrands } from '../actions/brandActions';
import BrandsIndex from './BrandsIndex';

class Brands extends Component {
  // constructor() {
  //   super()

  //   this.handleClick = this.handleClick.bind(this)
  // }

  // componentWillMount() {
  //   if (!AuthService.isAuthenticated()) {
  //     this.props.router.push('/login')
  //   }
  // }

  render() {
    const { brands } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/brands" component={BrandsIndex} />
          {/* <Route path="/brands/:id" component={Notebook} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brands: state.brands,
});

export default connect(mapStateToProps)(Brands);
