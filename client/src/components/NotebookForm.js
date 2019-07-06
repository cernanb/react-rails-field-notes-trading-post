/* eslint-disable camelcase */
import React, { Component } from 'react';
import formCss from '../formCss';

class NotebookForm extends Component {
  state = {
    photo_url: '',
    name: '',
    brand_id: null,
  };

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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { brands } = this.props;
    const { photo_url, name } = this.state;
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
        <div>
          <select
            {...formCss}
            placeholder="Brand"
            name="brand_id"
            component="select"
            onChange={this.handleChange}
          >
            <option />
            {brands.map(brand => (
              <option value={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// NotebookForm = reduxForm({
//   form: 'notebook',
// })(NotebookForm);

export default NotebookForm;
