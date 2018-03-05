import React, { Component } from 'react';
import Scan from '../containers/Scan';

class ScanPage extends Component {
  onScanSuccess() {
    this.props.history.push('/scandetails');
  }

  render() {
    return (
      <div className="form-container">
        <h1>Scan QR code from our device</h1>
        <Scan onScanSuccess={this.onScanSuccess.bind(this)}/>
      </div>
    );
  }
}

export default ScanPage;
