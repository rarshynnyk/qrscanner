import React, { Component } from 'react';

class HomePage extends Component {  
  render() {
    return (
      <div className="form-container">
        <h1>Welcome to QR Scanner App</h1>
        <div className="text-center">
          <p>Go to <b>"Scan"</b> tab to scan new QR</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
