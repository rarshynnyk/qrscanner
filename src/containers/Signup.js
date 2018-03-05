import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "../components/SignupForm";
import { createUser } from "../actions/usersActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ""
    };
  }

  submit(data) {
    this.props
      .createUser(data.email, data.password)
      .then(() => {
        this.props.onUserCreateSuccess();
      })
      .catch(error => {
        this.setState({ errors: error.message });
      });
  }

  render() {
    const { errors } = this.state;
    return <SignupForm submit={this.submit.bind(this)} errors={errors} />
  }
}

export default connect(null, { createUser })(Signup);
