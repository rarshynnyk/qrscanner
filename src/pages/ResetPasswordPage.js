import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ResetPassword from '../containers/ResetPassword';

class ResetPasswordPage extends Component {

  render() {
    return (
      <div className="form-container">
        <h1><FormattedMessage id="resetpassword.message" defaultMessage="Reset Password" /></h1>
        <ResetPassword />
      </div>
    );
  }
}

export default ResetPasswordPage;
