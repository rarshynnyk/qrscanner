import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Login from '../containers/Login';

class LoginPage extends Component {
  onLoginSuccess() {
    this.props.history.push('/scan');
  }

  render() {
    return (
      <div className="form-container">
        <h1><FormattedMessage id="login" defaultMessage="Log In" /></h1>
        <Login onLoginSuccess={this.onLoginSuccess.bind(this)}/>
        <div className="text-center">
          <p><FormattedMessage id="notregistered.message" defaultMessage="Don't have an application account?" /> <Link to="/signup"><FormattedMessage id="signup" defaultMessage="Sign Up" /></Link></p>
          <Link to="reset-password"><FormattedMessage id="forgotpassword.message" defaultMessage="Forgot password?" /></Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
