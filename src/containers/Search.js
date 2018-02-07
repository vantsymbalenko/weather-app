import React, { Component } from 'react';
import { connect } from 'react-redux';
import setRequest from '../actions/setRequest';
import '../css/search.css';

class Search extends Component{
	search = (e) => {
		e.preventDefault();
		this.props.setRequest(this.searchInput.value);
	}
	render(){
		return (
			<div className="search">
			<div className="search-field">
				<input 
					type="text" 
					placeholder="Weather in city ..."
					ref = {input => {this.searchInput = input}} 
				/>
			</div>
			<div className="search-button">
				<button onClick = {this.search}>Search</button>
			</div>
			</div>
		)
	}
}
const mapDispatchToProps = {
	setRequest : setRequest
}

export default connect(null, mapDispatchToProps)(Search)