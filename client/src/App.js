import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotebooks } from './actions/notebookActions'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Notebooks from './components/Notebooks'
import UserNotebooks from './components/UserNotebooks'
import Notebook from './components/Notebook'
import NewNotebook from './components/NewNotebook'
import Details from './components/Details'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

class App extends Component {
  componentDidMount() {
    this.props.getNotebooks()
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/about/details" component={Details} />
            <Route path="/about/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/notebooks/new" component={NewNotebook} />
            <Route path="/user/notebooks" component={UserNotebooks} />
            <Route path="/notebooks" component={Notebooks} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(
  null,
  { getNotebooks }
)(App)
