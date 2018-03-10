import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class HomePage extends Component {  
  render() {
    return (
      <div className="form-container">
        <h1>
          {<FormattedMessage id="welcome" defaultMessage="Welcome to QR Scanner App" />}
        </h1>
        <div className="text-center">
          <p>{<FormattedMessage id="welcome.description" defaultMessage="Go to 'Scan' tab to scan new QR" />}</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
