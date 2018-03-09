import React, { Component } from "react";
import { connect } from "react-redux";
import QrReader from "react-qr-reader";
import { SCAN_TIMEOUT } from "../constants/scan";
import { writeScanDetails } from "../actions/scanActions";

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: SCAN_TIMEOUT,
      errors: {}
    };
  }

  handleScan(result) {
    if (result) {
      this.props.writeScanDetails(result)
        .then(() => {
          this.props.onScanSuccess();
        })
        .catch((error => {
          this.setState({ errors: error.message });
        }))
    }
  }

  handleError(err) {
    this.setState({ errors: err });
  }

  openImageDialog() {
    this.refs.qrReader.openImageDialog();
  }

  render() {
    return (
      <React.Fragment>
        <QrReader
          ref="qrReader"
          delay={this.state.delay}
          onError={this.handleError.bind(this)}
          onScan={this.handleScan.bind(this)}
          className="scanner"
        />
        {this.state.errors && (<p>{this.state.errors.message}</p>)}
      </React.Fragment>
    );
  }
}

export default connect(null, { writeScanDetails })(Scan);
