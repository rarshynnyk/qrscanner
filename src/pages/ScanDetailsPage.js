import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ScanList from '../containers/ScanList';

class ScanDetailsPage extends Component {
  render() {
    return (
      <div className="form-container">
        <h1><FormattedMessage id="navigation.scandetails" defaultMessage="Scans:" /> </h1>
        <ScanList />
      </div>
    );
  }
}

export default ScanDetailsPage;
