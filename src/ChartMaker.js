import React, { Component} from 'react';
import ReactDom from 'react-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import 'particle-api-js'

class ChartMaker extends Component{
        constructor(){
                super();
                this.state = {
                    chartData: [],
                }
		} 
		componentWillMount() {
                var Particle = require('particle-api-js');
                var particle = new Particle();
                var token;
                particle.login({username: 'morgan.ringel@duke.edu', password: 'Mjr0910!!'}).then(
                   (data) => {
                        token = data.body.access_token;
                        console.log(token)
                        particle.getEventStream({ deviceId: '410024000451353432383931',  auth: token}).then(
                        (stream) => {
                            stream.on('event', (data) => {
                                    console.log("Event",data);
									console.log("Test");
									var sysdata = parseInt((data["data"]).substring(0,3))
				    					var diastdata = parseInt((data["data"]).substring(4,7))
				    					var sysname = data["published_at"].substring(0,10)
									this.setState({chartData:this.state.chartData.concat([{name:sysname, syst:sysdata, diast:diastdata}])})
                                    // parse a point
                                   this.updateChart(); 
                                });
                   })
                   },
                   (err) => {
                    console.log('Could not log in.', err);
                    }
                );

		}

       	updateChart = () => {
		console.log('hi');
	}
	

        render(){
		console.log(this.state.chartData);
                return(
                       <div>
                       <LineChart width={400} height={400} data={this.state.chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="name" />
 				 <YAxis />
			<Line type="monotone" dataKey="syst" stroke="#8884d8" />
			<Line type="monotone" dataKey="diast" stroke="#82ca9d" />
                        </LineChart>

                       </div>
                )
        }
}
export default ChartMaker

