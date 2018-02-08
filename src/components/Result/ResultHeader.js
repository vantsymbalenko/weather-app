import React from 'react';
import PropTypes from 'prop-types';
import HeaderElement from './HeaderElement';

export default function ResultHeader(props){
	return(
		<ul className={props.headerElements.length === 5 ? "five-list-element" : "six-list-element"}>
		{props.headerElements.map((item, index) => 
			<HeaderElement
				key 		 = {index}
				data 		 = {item.data} 
				temp 	 	 = {item.temp}
				clouds  	 = {item.clouds}
				imgSrc 		 = {item.imgSrc}
				imgTitle 	 = {item.imgTitle}
				pressure  	 = {item.pressure}
				windSpeed  	 = {item.windSpeed}
				headerDate 	 = {item.headerDate}
				description  = {item.description}
				isSelected	 = {props.isSelected}
				setSelect 	 = {props.setSelect}
			/>)}
		</ul>
	)
}

ResultHeader.propTypes = {
	headerElements : PropTypes.arrayOf(PropTypes.shape({
		data : PropTypes.string.isRequired,
		temp : PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number
		]),
		clouds : PropTypes.number.isRequired,
		imgSrc : PropTypes.string.isRequired,
		imgTitle : PropTypes.string,
		pressure : PropTypes.number.isRequired,
		windSpeed : PropTypes.number.isRequired,
		headerDate : PropTypes.string.isRequired,
		description : PropTypes.string,
	})),
	isSelected : PropTypes.string.isRequired,
	setSelect : PropTypes.func.isRequired
}