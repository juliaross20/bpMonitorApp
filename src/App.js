import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar'
import OpeningMenu from './OpeningMenu';
import Slider from 'material-ui/Slider';
import OtherInputs from './OtherInputs';
class App extends Component {
  render() {
    return (
      <div>
		<center> <h1> DBP App </h1> </center>
	    	<center> <p> The first easy to use at home doppler blood pressure monitor </p></center>
	    	< OpeningMenu />
	    
      </div>
    );
  }
}

export default App;
