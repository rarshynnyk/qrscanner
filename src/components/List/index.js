import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import "./index.css";

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        <ul className="list">
          {items.length ? items.reverse().map((item, index) => <li key={index}>{item.scan}</li>) : <div className="text-center"><FormattedMessage id="loading" defaultMessage="Loading" /></div>}
        </ul>  
      </React.Fragment>
    );
  }
}

export default List;
