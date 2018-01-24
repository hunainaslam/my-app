import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabContent extends Component {
  static propTypes = {
    name: PropTypes.string,
  }
  static contextTypes = {
  tabSelected: PropTypes.string,
};
  render() {
    const { tabSelected } = this.context;
    const { name,children} = this.props;
    if(tabSelected && tabSelected !== name ){
      return null
    }
      return (
            <div>{children}</div>
      );
    }
  }

export default TabContent;
