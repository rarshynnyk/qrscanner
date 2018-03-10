import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Signup from '../containers/Signup';

class SignupPage extends Component {
  onUserCreateSuccess() {
    this.props.history.push('/scan');
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <Signup onUserCreateSuccess={this.onUserCreateSuccess.bind(this)} />
        <div className="text-center">
          <p><FormattedMessage id="registered.message" defaultMessage="Have an application account?" /> <Link to="/login"><FormattedMessage id="login" defaultMessage="Login" /></Link></p>
          <Link to="reset-password"><FormattedMessage id="forgotpassword.message" defaultMessage="Forgot password?" /></Link>
        </div>
      </div>
    );
  }
}

export default SignupPage;
