import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class TabButtons extends Component {

  static propTypes = {
    name: PropTypes.string,
  }
	handleClick = () => {
  	if(this.props.onClick){
    	this.props.onClick(this.props.name);
    }
  }

  render () {
    return(
  	<button type="button" value={this.props.name} onClick={this.handleClick}>{this.props.name}</button>
  );
}
}

export default TabButtons;
