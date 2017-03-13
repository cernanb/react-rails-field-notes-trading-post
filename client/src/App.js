import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;