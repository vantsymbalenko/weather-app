import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/history.css';
import selectFromHistory from '../actions/selectFromHistory';
import HistoryElement from '../components/HistoryElement';

class History extends Component{
	render(){
		return (
			<ul className="history-list">
				{this.props.cityNames.map((item, index) => 
					<HistoryElement 
						key = {item}
						cityName = {item}
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
export default connect(mapStateToProps, mapDispatchToProps)(History)