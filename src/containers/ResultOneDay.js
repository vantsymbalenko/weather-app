import React, { Component } from 'react';
import '../css/resultOneDay.css';
import HoursWeather from './HoursWeather';

export default class ResultOneDay extends Component{
	render(){
		console.log("sadasda");
		return(
			<div className="one-day">
				<div className="caption">
					<div className="hours">
						<span></span>
						{this.props.oneDay.map((item) => 
							<span>
								{item.dt_txt.split(" ")[1].split(":")[0] + ":" + item.dt_txt.split(" ")[1].split(":")[1]}
							</span>
						)}
					</div>
					<div className="temp">
						<span>Temperature</span>
						{this.props.oneDay.map((item) => 
							<span>
								{Math.round(item.main.temp - 273)}
							</span>
						)}
					</div>
					<div className="pressure">
						<span>Pressure</span>
						{this.props.oneDay.map((item) => 
							<span>
								{item.main.pressure}
							</span>
						)}
					</div>
					<div className="speed">
						<span>Wind Speed</span>
						{this.props.oneDay.map((item) => 
							<span>
								{item.wind.speed}
							</span>
						)}
					</div>
					<div className="clouds">
						<span>Cloudiness</span>
						{this.props.oneDay.map((item) => 
							<span>
								{item.clouds.all}
							</span>
						)}
					</div>
				</div>
				
				
			</div>
		)
	}
}