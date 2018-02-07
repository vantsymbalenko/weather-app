import React, { Component } from 'react';

export default class HistoryElement extends Component{
	selectFromHistory  = () => {
		this.props.selectFromHistory(this.props.cityName);
	}
	render(){
		return <li onClick = {this.selectFromHistory}>{this.props.cityName}</li>
	}
}