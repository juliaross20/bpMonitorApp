import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
class OtherInputs extends Component{
	constructor(){
		super();
	}
 	state = {
    		SleepSlider: 7,
    		StressSlider: 5,
  	};

 	 handleSleepSlider = (event, value) => {
    		this.setState({SleepSlider: value});
  	};

  	handleStressSlider = (event, value) => {
    		this.setState({StressSlider: value});
  	}
	render(){
		return(
			<div>
				<MuiThemeProvider>
				<Slider min={0} max={14} step={.5} value={this.state.SleepSlider} onChange={this.handleSleepSlider} />
        			<p>
         				<span>{'I got '}</span>
         				<span>{this.state.SleepSlider}</span>
         			 	<span>{' hours of sleep last night'}</span>
       				</p>
        			<Slider
          				min={0}
          				max={10}
          				step={1}
          				value={this.state.StressSlider}
          				onChange={this.handleStressSlider}
        			/>
       				<p>
          				<span>{'I would rate my stress level '}</span>
         				<span>{this.state.StressSlider}</span>
         				<span>{' out of 10'}</span>
        			</p>
				<TextField
    					intText="Other notes for my doctor: "
					floatingLabelText="Other notes for my doctor"
      					floatingLabelFixed={true}
      					multiLine={true}
      					rows={2}
      					rowsMax={4}
   				 /><br />

				</MuiThemeProvider>
			</div>
		)
	}
}
export default OtherInputs
