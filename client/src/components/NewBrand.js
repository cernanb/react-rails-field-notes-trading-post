import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBrand } from '../actions/brandActions';
import BrandForm from './BrandForm';

class NewBrand extends Component {
  // componentWillMount() {
  //   if (!AuthService.isAuthenticated()) {
  //     this.props.router.push('/login')
  //   }
  // }

  submit = brand => {
    const { createBrand, history } = this.props;

    createBrand(brand, history);
  };

  render() {
    return (
      <div>
        <h1>Create a New Brand</h1>
        <BrandForm handleSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createBrand }
)(NewBrand);
