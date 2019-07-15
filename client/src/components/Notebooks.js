import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import AuthService from '../services/authService';
import { getNotebooks, addUserNotebook } from '../actions/notebookActions';
import NotebooksIndex from './NotebooksIndex';
import Notebook from './Notebook';

class Notebooks extends Component {
  // constructor() {
  //   super()

  //   this.handleClick = this.handleClick.bind(this)
  // }

  // componentWillMount() {
  //   if (!AuthService.isAuthenticated()) {
  //     this.props.router.push('/login')
  //   }
  // }

  render() {
    const { notebooks } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/notebooks" component={NotebooksIndex} />
          <Route path="/notebooks/:id" component={Notebook} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addUserNotebook,
    },
    dispatch
  ),
});

const mapStateToProps = state => ({
  notebooks: state.notebooks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebooks);

// <div {...notebookContainerCSS}>
//   {notebooks.map(notebook => (
//     <div {...notebookCSS} key={notebook.id}>
//       <Link {...linkCSS} to={{ pathname: `/notebooks/${notebook.id}` }}>
//         <p {...notebookCardTitle}>{notebook.edition}</p>
//         <img
//           {...imageCSS}
//           src="https://fieldnotes.imgix.net/images/products/FNC-33-Black-Ice-A.jpg?auto=format&fit=crop&h=360&ixlib=php-1.1.0&q=55&w=400&s=00915ae492f9576f67bfa75e8fa70bcc"
//         />
//       </Link>
//       <button onClick={() => this.props.actions.addUserNotebook(notebook.id)}>Add to Collection</button>
//     </div>
//   ))}
// </div>
