import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../containers/Login';

class LoginPage extends Component {
  onLoginSuccess() {
    this.props.history.push('/scan');
  }

  render() {
    return (
      <div className="form-container">
        <h1>Log In</h1>
        <Login onLoginSuccess={this.onLoginSuccess.bind(this)}/>
        <p>Don't have an application account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
  }
}

export default LoginPage;
