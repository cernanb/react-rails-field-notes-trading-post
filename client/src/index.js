import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import About from './components/About'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Notebooks from './components/Notebooks'
import Notebook from './components/Notebook'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/notebooks" component={Notebooks}>
            <Route path="/notebooks/:id" component={Notebook} />
          </Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
