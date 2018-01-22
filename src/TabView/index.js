import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class TabView extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
  }
  render() {
    const { activeTab} = this.props;
      return (
          <div className={activeTab}> {activeTab}
          </div>
      );
    }
  }

export default TabView;
