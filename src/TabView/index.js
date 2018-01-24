import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabView extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
  }

  static childContextTypes = {
  tabSelected: PropTypes.string
};
  getChildContext() {
    return {tabSelected: this.props.activeTab};
  }

  render() {
      return (
      <React.Fragment>{this.props.children}</React.Fragment>
      );
    }
  }

export default TabView;
