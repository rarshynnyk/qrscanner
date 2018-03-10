import React, { Component } from "react";
import { connect } from 'react-redux';
import LangList from '../components/LangList';
import { setLocale } from '../actions/localeActions';

class LangNavigation extends Component {
  render() {
    return <LangList setLocale={this.props.setLocale} />
  }
}

export default connect(null, { setLocale })(LangNavigation);
