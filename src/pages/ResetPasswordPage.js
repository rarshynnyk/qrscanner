import React, { Component } from 'react';
import ResetPassword from '../containers/ResetPassword';

class ResetPasswordPage extends Component {

  render() {
    return (
      <div className="form-container">
        <h1>Reset Password</h1>
        <ResetPassword />
      </div>
    );
  }
}

export default ResetPasswordPage;
