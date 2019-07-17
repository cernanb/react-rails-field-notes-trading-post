import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Header, Container, Button, Icon } from "semantic-ui-react";
import AuthService from "../services/authService";
import notebooks from "../images/notebooks.jpg";

class Home extends Component {
  render() {
    return (
      <Segment
        textAlign="center"
        style={{
          minHeight: 900,
          padding: "1em 0em",
          backgroundImage: `url(${notebooks})`,
          backgroundSize: "cover"
        }}
        vertical
      >
        <div className="ui text container">
          {AuthService.isAuthenticated() && (
            <h1>
              Welcome {JSON.parse(localStorage.getItem("profile")).username}{" "}
            </h1>
          )}
        </div>
        <Container text>
          <Header
            as="h1"
            content="Paper Trail"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "4em"
            }}
          />
          <Header
            as="h2"
            content="A home for analog fans."
            inverted
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em"
            }}
          />
          <Link to="/signup">
            <Button primary size="huge">
              Get Started
              <Icon name="right arrow" />
            </Button>
          </Link>
          <br />
          <span style={{ color: "#2185d0" }}>
            <Link to="/login">or Login</Link>
          </span>
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile
});

export default connect(mapStateToProps)(Home);
