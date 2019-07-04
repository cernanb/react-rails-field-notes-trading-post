import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrand } from '../actions/brandActions';
import BrandForm from './BrandForm';

class NewBrand extends Component {
  // componentWillMount() {
  //   if (!AuthService.isAuthenticated()) {
  //     this.props.router.push('/login')
  //   }
  // }

  submit = values => {
    const { createBrand } = this.props;

    createBrand(values);
  };

  render() {
    return (
      <div>
        <h1>Create a New Brand</h1>
        <BrandForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createBrand }
)(NewBrand);
