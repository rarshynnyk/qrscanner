import React, { Component } from 'react';
import ScanList from '../containers/ScanList';

class ScanDetailsPage extends Component {
  render() {
    return (
      <div className="form-container">
        <h1>Scans: </h1>
        <ScanList />
      </div>
    );
  }
}

export default ScanDetailsPage;
