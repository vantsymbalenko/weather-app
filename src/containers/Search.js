import React, { Component } from 'react';
import { connect } from 'react-redux';
import setRequest from '../actions/setRequest';

class Search extends Component{
	search = (e) => {
		e.preventDefault();
		this.props.setRequest(this.searchInput);
	}
	render(){
		return (
			<div>
				<input type="text" ref = {input => {this.searchInput = input}} />
				<button onClick = {this.search}>Search</button>
			</div>
		)
	}
}
const mapDispatchToProps = {
	setRequest : setRequest
}

export default connect(null, mapDispatchToProps)(Search)