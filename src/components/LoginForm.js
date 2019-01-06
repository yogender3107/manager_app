import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            placeholder="password"
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);
