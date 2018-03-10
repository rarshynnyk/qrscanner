import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Scan from '../containers/Scan';

class ScanPage extends Component {
  onScanSuccess() {
    this.props.history.push('/scandetails');
  }

  render() {
    return (
      <div className="form-container">
        <h1><FormattedMessage id="scan.message" defaultMessage="Scan QR code from our device" /> </h1>
        <Scan onScanSuccess={this.onScanSuccess.bind(this)}/>
      </div>
    );
  }
}

export default ScanPage;
