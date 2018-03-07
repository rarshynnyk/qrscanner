import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <p>Have an application account? <Link to="/login">Login</Link></p>
          <Link to="reset-password">Forgot password?</Link>
        </div>
      </div>
    );
  }
}

export default SignupPage;
