import React, { Component } from "react";
import "./index.css";
import ReactCountryFlag from 'react-country-flag';

class LangList extends Component {
  setLocale(lang) {
   this.props.setLocale(lang);
  }

  render() {
    return (
      <ul className="lang-list">
        <li><a onClick={() => this.setLocale("en")}><ReactCountryFlag code="US" svg /></a></li>
        <li><a onClick={() => this.setLocale("ru")}><ReactCountryFlag code="RU" svg /></a></li>
      </ul>
    );
  }
}

export default LangList;
