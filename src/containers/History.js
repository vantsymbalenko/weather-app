import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HistoryElement from '../components/HistoryElement';

import selectFromHistory from '../actions/selectFromHistory';
import '../css/history.css';

class History extends Component{
	render(){
		return (
			<ul className="history-list">
				{this.props.cityNames.map((item, index) => 
					<HistoryElement 
						key 	 		  = {item}
						cityName 		  = {item}
						selectFromHistory = {this.props.selectFromHistory}
					/>
				)}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		cityNames : state.history.map((item) => item.city.name)
	}
}

const mapDispatchToProps = {
	selectFromHistory : selectFromHistory
}

History.propTypes = {
	cityNames 		  : PropTypes.arrayOf(PropTypes.string),
	selectFromHistory : PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(History);