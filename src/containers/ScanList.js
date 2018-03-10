import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScanList } from '../actions/scanActions';
import List from '../components/List';

class ScanList extends Component {
  componentDidMount() {
    this.props.isAuthenticated && (this.props.fetchScanList());
  }

  render() {
    const { scanList } = this.props;

    return (
      <List items={scanList} />
    );
  }
}

function mapStateToProps(state) {
  return {
    scanList: state.scan.scans,
    isAuthenticated: state.users.user
  }
}

export default connect(mapStateToProps, { fetchScanList })(ScanList);
