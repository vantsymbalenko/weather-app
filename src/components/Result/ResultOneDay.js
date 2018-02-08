import React from 'react';
import PropTypes from 'prop-types';
import '../../css/resultOneDay.css';

export default function ResultOneDay(props){
	return(
		<div className="one-day">
			<div className="caption">
				<div className="hours">
					<span></span>
					{props.detailInfo.map((item) => 
						<span key={item.dt_txt}>
							{item.dt_txt.split(" ")[1].split(":")[0] + ":" + item.dt_txt.split(" ")[1].split(":")[1]}
						</span>
					)}
				</div>
				<div className="temp">
					<span>Temperature &#176;C</span>
					{props.detailInfo.map((item) => 
						<span key={item.dt_txt}>
							{Math.round(item.main.temp - 273)}
						</span>
					)}
				</div>
				<div className="pressure">
					<span>Pressure hPa</span>
					{props.detailInfo.map((item) => 
						<span key={item.dt_txt}>
							{Math.round(item.main.pressure)}
						</span>
					)}
				</div>
				<div className="speed">
					<span>Wind Speed m/s</span>
					{props.detailInfo.map((item) => 
						<span key={item.dt_txt}>
							{item.wind.speed}
						</span>
					)}
				</div>
				<div className="clouds">
					<span>Cloudiness %</span>
					{props.detailInfo.map((item) => 
						<span key={item.dt_txt}>
							{item.clouds.all}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}


ResultOneDay.propTypes = {
	detailInfo : PropTypes.arrayOf(PropTypes.shape({
		dt_txt : PropTypes.string.isRequired,
		main   : PropTypes.shape({
			temp     : PropTypes.number.isRequired,
			pressure : PropTypes.number.isRequired
		}),
		wind   : PropTypes.shape({
			speed : PropTypes.number.isRequired
		}),
		clouds : PropTypes.shape({
			all : PropTypes.number.isRequired
		})
	}))
}