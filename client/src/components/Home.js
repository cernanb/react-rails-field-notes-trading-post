import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthService from '../services/authService';

class Home extends Component {
  render() {
    return (
      <div>
        {AuthService.isAuthenticated() ? (
          <h1>
            Welcome {JSON.parse(localStorage.getItem('profile')).username}{' '}
          </h1>
        ) : (
          <h1>
            Please <Link to="/login">login</Link> or{' '}
            <Link to="signup">signup</Link>
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(Home);
