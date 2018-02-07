import React, { Component } from 'react';

export default class HoursWeather extends Component{
	render(){
		return(
			<div className="hour-element">
				<div className="hour">{this.props.hours}</div>
				<div className="temp">{this.props.temp}</div>
				<div className="pressure">{this.props.pressure}</div>
				<div className="speed">{this.props.wind}</div>
				<div className="clouds">{this.props.clouds}</div>
			</div>
		)
	}
}