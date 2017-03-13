import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import About from './components/About'
import Topics from './components/Topics'
import Home from './components/Home'
import Signup from './components/Signup'



ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/signup" component={Signup}/>
      </Route>
  </Router>,
  document.getElementById('root')
);
