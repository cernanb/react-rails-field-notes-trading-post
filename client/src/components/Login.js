import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container } from 'semantic-ui-react';
import { login } from '../actions/authActions';
import AuthService from '../services/authService';
import buttonCss from '../buttonCss';
import formCss from '../formCss';

class Login extends Component {
  constructor() {
    super();
    this.state = { username: '', password: '' };
  }

  componentWillMount() {
    if (AuthService.isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (AuthService.isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { login } = this.props;

    const user = this.state;

    return login(user);
  }

  render() {
    const { username, password } = this.state;
    const { auth } = this.props;
    return (
      <Container>
        <h1>{auth.err_message}</h1>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Field>
            <label>Username</label>
            <input
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="username"
              value={username}
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="password"
              value={password}
              placeholder="Password"
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
        {/* <form>
          <input
            {...formCss}
            type="text"
            ref={input => (this.input.username = input)}
            placeholder="username"
          />{' '}
          <br /> <br />
          <input
            {...formCss}
            type="password"
            ref={input => (this.input.password = input)}
            placeholder="password"
          />{' '}
          <br /> <br />
          <input {...buttonCss} type="submit" />
        </form> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
