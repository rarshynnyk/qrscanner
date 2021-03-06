import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import "./index.css";

class ResetForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
          {this.props.errors && (<div className="form-group">{this.props.errors}</div>)}
          <button type="submit" className="btn">
            <FormattedMessage id="label.send" defaultMessage="Send" />
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ResetForm;
