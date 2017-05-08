import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import formCss from '../formCss'

class NotebookForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field {...formCss} placeholder="Name" name="name" component="input" type="text"/>
        </div>
        <div>
          <Field {...formCss} placeholder="Edition" name="edition" component="input" type="text"/>
        </div>
        <div>
          <Field {...formCss} placeholder="Company" name="company" component="select">
            <option />
            <option value="1">Field Notes</option>
            <option value="2">Write Notepads</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

NotebookForm = reduxForm({
  form: 'notebook'
})(NotebookForm)

export default NotebookForm
