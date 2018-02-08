import React from 'react';
import PropTypes from 'prop-types';

export default function HistoryElement(props){
	const selectFromHistory  = () => {
		props.selectFromHistory(props.cityName);
	}
	return <li onClick = {selectFromHistory}>{props.cityName}</li>
}

HistoryElement.propTypes = {
	cityName 			: PropTypes.string.isRequired,
	selectFromHistory 	: PropTypes.func.isRequired
}