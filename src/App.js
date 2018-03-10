import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ScanPage from "./pages/ScanPage";
import ScanDetailsPage from "./pages/ScanDetailsPage";
import HomePage from "./pages/HomePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { userLogout } from "./actions/usersActions";
import LoadingBar from "react-redux-loading-bar";
import "./index.css";
import { IntlProvider } from 'react-intl';
import messages from './messages';
import LangNavigation from './containers/LangNavigation';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
  />
);

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
  />
);

class App extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container">
          <header className="header">
            <LoadingBar className="loading-bar" />
          </header>
          <LangNavigation />
          <Navigation isAuthenticated={this.props.isAuthenticated} logout={this.props.userLogout} />
          <Route exact path="/" component={HomePage} />
          <GuestRoute
            exact
            path="/login"
            isAuthenticated={this.props.isAuthenticated}
            component={LoginPage}
          />
          <GuestRoute
            exact
            path="/signup"
            isAuthenticated={this.props.isAuthenticated}
            component={SignupPage}
          />
          <GuestRoute
            exact
            path="/reset-password"
            isAuthenticated={this.props.isAuthenticated}
            component={ResetPasswordPage}
          />
          <PrivateRoute
            exact
            path="/scan"
            isAuthenticated={this.props.isAuthenticated}
            component={ScanPage}
          />
          <PrivateRoute
            exact
            path="/scandetails"
            isAuthenticated={this.props.isAuthenticated}
            component={ScanDetailsPage}
          />
        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.users.user,
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps, { userLogout })(App);
