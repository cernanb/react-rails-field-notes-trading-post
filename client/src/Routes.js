import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
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

export default () => (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About}>
          <Route path="/about/details" component={Details} />
          <Route path="/about/contact" component={Contact} />
        </Route>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/notebooks/new" component={NewNotebook}/>
        <Route path="/user/notebooks" component={UserNotebooks}/>
        <Route path="/notebooks" component={Notebooks}>
          <Route path="/notebooks/:id" component={Notebook} />
        </Route>
      </Route>
  </Router>
)
