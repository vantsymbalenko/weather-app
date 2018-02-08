import React from 'react';
import PropTypes from 'prop-types';
import '../css/error.css';

export default function ErrorComponent(props){
		return(
			<div className="error">
				Ooooopsss something wrong :(
				<div className="decription-error">{props.error}</div>
			</div>
		);
}

ErrorComponent.propTypes = {
	error : PropTypes.string
}