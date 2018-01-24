import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background:  transparent;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

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
  	   <Button value={this.props.name} onClick={this.handleClick}>{this.props.name}</Button>
    );
  }
}

export default TabButtons;
