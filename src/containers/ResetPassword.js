import React, { Component } from "react";
import { connect } from "react-redux";
import ResetForm from "../components/ResetForm";
import { resetPassword } from '../actions/resetPasswordActions';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ''
    }
  }

  submit(data) {
    this.props.resetPassword(data.email)
      .then(() => {
        
      })
      .catch(error => {
        this.setState({ errors: error.message });
      })
  }

  render() {
    const { errors } = this.state; 
    const { isResetSent, resetEmail } = this.props;
    return isResetSent ? <p className="text-center">Please check your email! We have sent reset mail to {resetEmail}</p> : <ResetForm submit={this.submit.bind(this)} errors={errors} />
  }
}

function mapStateToProps (state) {
  return {
    isResetSent: !!state.resetPassword.email,
    resetEmail: state.resetPassword.email
  }
}

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
