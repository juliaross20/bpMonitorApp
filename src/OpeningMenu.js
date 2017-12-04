import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import OtherInputs from './OtherInputs';
import ChartMaker from './ChartMaker';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class OpeningMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
	<Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Overview" value="a">
          <div>
            <center><h2 style={styles.headline}>Summary</h2></center>
            <center><p>
	    	This is a summary of your past blood pressure data
	    	<center><ChartMaker/></center>
            </p></center>
          </div>
        </Tab>
        <Tab label="Take New Recording" value="b">
          <div>
            <center><h2 styie={styles.headline}>Input Other Metrics for your Doctor</h2></center>
            <OtherInputs />
          </div>
        </Tab>
      </Tabs>
	   </MuiThemeProvider>
    );
  }
}

export default OpeningMenu;
