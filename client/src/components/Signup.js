import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
import { signup } from "../actions/authActions";
import AuthService from "../services/authService";

class Signup extends Component {
  constructor() {
    super();
    this.input = {};
    this.state = { username: "", password: "", email: "" };
  }

  componentWillMount() {
    if (AuthService.isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (AuthService.isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { signup } = this.props;

    const user = this.state;

    return signup(user);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="username"
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              name="password"
              placeholder="password"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
