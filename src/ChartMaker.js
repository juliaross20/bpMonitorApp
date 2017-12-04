
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
                var Particle = require('particle-api-js');
                var particle = new Particle();
                var token;
                particle.login({username: 'morgan.ringel@duke.edu', password: 'Mjr0910!!'}).then(
                   function(data){
                        token = data.body.access_token;
                        console.log(token)
                        particle.getEventStream({ deviceId: '410024000451353432383931',  auth: token}).then(
                        function(stream) {
                            stream.on('event', function(data) {
                                    console.log("Event",data);
                                    // parse a point
                                   this.updateChart(); 
                                });
                   })
                   },
                   function (err) {
                    console.log('Could not log in.', err);
                    }
                );
	} 
       	updateChart = () => {
		console.log('hi');
		this.setState({chartData:this.state.chartData.concat([{name:'b', value:18}])})
	}
	

        render(){
		console.log(this.state.chartData);
                return(
                       <div>
                       <LineChart width={400} height={400} data={this.state.chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="name" />
 				 <YAxis />
			<Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>

                       </div>
                )
        }
}
export default ChartMaker
