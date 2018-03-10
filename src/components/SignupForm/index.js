import React, { Component } from "react";
import "./index.css";
import { FormattedMessage } from 'react-intl';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="email" className="control-label">
              <FormattedMessage id="label.email" defaultMessage="Email" />
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="control-label">
              <FormattedMessage id="label.password" defaultMessage="Password" />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={event =>
                this.setState({ password: event.target.value })}
            />
          </div>
          {this.props.errors && (<div className="form-group">{this.props.errors}</div>)}
          <button type="submit" className="btn">
            <FormattedMessage id="signup" defaultMessage="Sign Up" />
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignupForm;
