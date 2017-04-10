import React, { Component } from 'react'

class Notebook extends Component {
  render() {
    return (
      <div>
        <h3>Brand: {this.props.name}</h3>
        <h3>Edition: {this.props.edition}</h3>
      </div>
    )
  }
}

export default Notebook
