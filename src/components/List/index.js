import React, { Component } from "react";
import "./index.css";

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        <ul className="list">
          {items.length ? items.reverse().map((item, index) => <li key={index}>{item.scan}</li>) : 'loading list'}
        </ul>  
      </React.Fragment>
    );
  }
}

export default List;
