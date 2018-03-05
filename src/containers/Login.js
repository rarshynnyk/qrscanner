import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import { login } from "../actions/usersActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ''
    }
  }

  submit(data) {
    this.props.login(data.email, data.password)
      .then(() => {
        this.props.onLoginSuccess();
      })
      .catch(error => {
        this.setState({ errors: error.message });
      })
  }

  render() {
    const { errors } = this.state;
    return <LoginForm submit={this.submit.bind(this)} errors={errors} />
  }
}

export default connect(null, { login })(Login);
