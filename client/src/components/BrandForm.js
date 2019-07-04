import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import formCss from '../formCss';

class BrandForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            {...formCss}
            placeholder="Name"
            name="name"
            component="input"
            type="text"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

BrandForm = reduxForm({
  form: 'brand',
})(BrandForm);

export default BrandForm;
