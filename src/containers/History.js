import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component{
	render(){
		return (
			<ul>
				{this.props.history.map((item, index) => {
					return( <li key={index}>{item.name}</li>)
				})}
			</ul>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		history : state.history
	}
}
export default connect(mapStateToProps)(History)