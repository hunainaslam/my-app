import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import '../../App.css';

class TabContent extends Component {
  static propTypes = {
    tabName: PropTypes.string,
  }
  render() {
    const { tabName} = this.props;
      return (
          <div>
            <div className={tabName}></div>
          </div>
      );
    }
  }

export default TabContent;
