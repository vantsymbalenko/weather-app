import React, { Component } from 'react';

export default class HeaderElement extends Component{
	select = () => {
		this.props.setSelect(this.props.data);
	}
	render(){
		console.log(this.props.data);
		return(
				<li className={this.props.selectedData === this.props.data ? "header-element selected" : "header-element" } onClick = {this.select}>
					  	<div className="city-date">{this.props.date}</div>
					  	<div className="img">
					     	<img src={this.props.img} alt="cloudness" title={this.props.main}/> 
					  	</div>
	    				<div className="description">{this.props.description}</div>
				 	 	<div className="other-info">
						    <div className="temp">{this.props.temp} &#176;C</div>
						    <div className="pressure"><span>Pressure</span> {this.props.pressure} hpa</div>
						    <div className="speed"><span>Wind</span> {this.props.windSpeed} m/s</div>
						    <div className="clouds"><span>Clouds</span> {this.props.clouds} %</div>
					  	</div>
				</li>
		)
	}
}