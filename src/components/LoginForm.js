import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
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

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
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

function mapStateToProps({ auth }) {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
