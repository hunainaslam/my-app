import React, { Component } from 'react';
import TabButtons from './TabButtons';
import TabContent from './TabView/TabContent';
import TabView from './TabView';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'buysell'
    };
  }
  handleClick = (name) => {
		this.setState({
	    activeTab: name
    })
  }

    render () {
    return (
      <div className="wrapper">
      <div className="header">Header</div>
        <TabView activeTab={this.state.activeTab}>
        <div>
        <div>
          <TabContent name="book" />
          </div>
          </div>
          <TabContent name="chart"/>
          <TabContent name="buysell"/>
        </TabView>
        <div className="footer">
          <TabButtons name="chart" onClick={this.handleClick} />
          <TabButtons name="book" onClick={this.handleClick} />
          <TabButtons name="buysell" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
