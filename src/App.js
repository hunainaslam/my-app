import React, { Component } from 'react';
import TabButton from './TabButtons';
import TabView from './TabView';
import TabContent from './TabContent';
import styled from 'styled-components';

const desktop = 700;

const Grid = styled.div`
  @media(min-width: ${desktop}px){
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "chart buysell"
                         "trade trade"
    grid-template-rows: 50px 1fr 30px;
    grid-template-columns: 1fr 450px;
}
`;

const GridCell = styled.div`
  grid-area: ${({ id }) => id};
  border: 1px solid palevioletred;
`;

const Header = styled.div`
  width: 100%;
  background-color:yellow;
`;

const Footer = styled.div`
  background-color:yellow;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const MobileView = styled.div`
  @media(min-width: 500px){
    display:none;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: undefined,
    };
  }

componentWillMount() {
  window.addEventListener('load', this.handleMobileView);
  window.addEventListener('resize', this.windowResizeHandler);
}

componentWillUnmount() {
  window.addEventListener('load', this.handleMobileView);
  window.addEventListener('resize', this.windowResizeHandler);
}

windowResizeHandler = () => {
  this.handleMobileView();
};

handleMobileView = () => {
  if (window.matchMedia("(max-width: 400px)").matches) {
    this.setState({ activeTab: 'buysell' });
  } else {
    this.setState({ activeTab: undefined });
  }
};

handleClick = (name) => {
		this.setState({
	    activeTab: name
    })
  }

render () {
    return (
      <div>
      <Header>Header</Header>
      <Grid>
        <TabView activeTab={this.state.activeTab}>
            <TabContent name="chart">
                <GridCell id="chart">
                  chart
                </GridCell>
            </TabContent>
            <TabContent name="buysell">
              <GridCell id="buysell">
                buysell
              </GridCell>
            </TabContent>
            <TabContent name="trade">
              <GridCell id="trade">
                trade history
              </GridCell>
            </TabContent>
        </TabView>
        </Grid>
        <Footer>
        Footer
          <MobileView>
            <TabButton name="chart" onClick={this.handleClick} />
            <TabButton name="buysell" onClick={this.handleClick} />
            <TabButton name="trade" onClick={this.handleClick} />
          </MobileView>
        </Footer>

      </div>
    );
  }
}

export default App;
