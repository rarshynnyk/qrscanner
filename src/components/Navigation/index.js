import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class Navigation extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navigation">
        <ul>
          {isAuthenticated ? null : <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>}
          {isAuthenticated ? null : <li><NavLink to="/signup" activeClassName="active">Sign Up</NavLink></li>}
          {isAuthenticated ? <li><NavLink to="/scan" activeClassName="active">Scan</NavLink></li> : null}
          {isAuthenticated ? <li><NavLink to="/scandetails" activeClassName="active">Scan Details</NavLink></li> : null}
          {isAuthenticated ? <li><button onClick={() => this.props.logout()}>Log Out</button></li> : null}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
