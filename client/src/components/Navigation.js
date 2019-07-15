import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';
import AuthService from '../services/authService';
import NavLink from './NavLink';

class Navigation extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { logout } = this.props;
    const { activeItem } = this.state;
    return (
      <div>
        <Menu style={{ marginBottom: '30px' }} pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          {AuthService.isAuthenticated() && (
            <>
              <Menu.Item
                as={Link}
                to="/brands"
                name="brands"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to="/user/notebooks"
                name="userNotebooks"
                onClick={this.handleItemClick}
              >
                My Notebooks
              </Menu.Item>
              {AuthService.currentUser().admin && (
                <>
                  <Menu.Item
                    as={Link}
                    to="/notebooks/new"
                    name="new"
                    onClick={this.handleItemClick}
                  >
                    + Notebooks
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to="/brands/new"
                    name="newBrand"
                    onClick={this.handleItemClick}
                  >
                    + Brands
                  </Menu.Item>
                </>
              )}
            </>
          )}
          <Menu.Menu position="right">
            {AuthService.isAuthenticated() ? (
              <>
                <Menu.Item
                  as={Link}
                  to="/"
                  name="logout"
                  onClick={() => logout()}
                />
              </>
            ) : (
              <>
                <Menu.Item as={Link} to="/login" name="login" />
                <Menu.Item as={Link} to="/signup" name="signup" />
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
