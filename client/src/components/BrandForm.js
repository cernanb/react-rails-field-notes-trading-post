/* eslint-disable camelcase */
import React, { Component } from 'react';
import formCss from '../formCss';

class BrandForm extends Component {
  state = {
    photo_url: '',
    name: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { handleSubmit } = this.props;

    e.preventDefault();
    handleSubmit(this.state);
  };

  uploadFile = async e => {
    const { files } = e.target;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'fieldnotesbrand');
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dyctv2fj1/image/upload`,
      { method: 'POST', body: data }
    );
    const file = await res.json();
    this.setState({ photo_url: file.secure_url });
  };

  render() {
    const { name, photo_url } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            {...formCss}
            placeholder="Name"
            name="name"
            type="text"
            onChange={this.handleChange}
            value={name}
          />
        </div>
        <div>
          <input
            {...formCss}
            placeholder="Image"
            name="photo_url"
            type="file"
            onChange={this.uploadFile}
          />
        </div>
        <div>{photo_url && <img src={photo_url} alt="log" />}</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// BrandForm = reduxForm({
//   form: 'brand',
// })(BrandForm);

export default BrandForm;
