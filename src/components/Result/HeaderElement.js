import React 	 from 'react';
import PropTypes from 'prop-types';

export default function HeaderElement(props){
	const select = () => {
		props.setSelect(props.data);
	}
	return(
			<li className={props.isSelected === props.data ? "header-element selected" : "header-element" } onClick = {select}>
				  	<div className="city-date">{props.headerDate}</div>
				  	<div className="img">
				     	<img src={props.imgSrc} alt="cloudness" title={props.imgTitle}/> 
				  	</div>
    				<div className="description">{props.description}</div>
			 	 	<div className="other-info">
					    <div className="temp">{props.temp} &#176;C</div>
					    <div className="pressure"><span>Pressure</span> {props.pressure} hpa</div>
					    <div className="speed"><span>Wind</span> {props.windSpeed} m/s</div>
					    <div className="clouds"><span>Clouds</span> {props.clouds} %</div>
				  	</div>
			</li>
	);
}

HeaderElement.propTypes = {
	data 		: PropTypes.string.isRequired,
	temp 		: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	clouds 		: PropTypes.number.isRequired,
	imgSrc 		: PropTypes.string.isRequired,
	imgTitle 	: PropTypes.string.isRequired,
	pressure 	: PropTypes.number.isRequired,
	windSpeed 	: PropTypes.number.isRequired,
	headerDate 	: PropTypes.string.isRequired,
	isSelected 	: PropTypes.string.isRequired,
	description : PropTypes.string.isRequired,

}