import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { FormattedMessage } from 'react-intl';

class Navigation extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navigation">
        <ul>
          {isAuthenticated ? null : <li><NavLink to="/login" activeClassName="active"><FormattedMessage id="login" defaultMessage="Log In" /></NavLink></li>}
          {isAuthenticated ? null : <li><NavLink to="/signup" activeClassName="active"><FormattedMessage id="signup" defaultMessage="Sign Up" /></NavLink></li>}
          {isAuthenticated && <li><NavLink to="/scan" activeClassName="active"><FormattedMessage id="navigation.scan" defaultMessage={"Scan"}/></NavLink></li>}
          {isAuthenticated && <li><NavLink to="/scandetails" activeClassName="active"><FormattedMessage id="navigation.scandetails" defaultMessage={"Scan Details"} /></NavLink></li>}
          {isAuthenticated && <li><button onClick={() => this.props.logout()}><FormattedMessage id="navigation.logout" defaultMessage={"Log Out"} /></button></li>}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
