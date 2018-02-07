import React, { Component } from 'react';
import HeaderElement from './HeaderElement';

export default class ResultHeader extends Component{
	render(){
		// console.log(this.props.selectedData);
		return(
			<ul className={this.props.headers.length === 5 ? "five-list-element" : "six-list-element"}>
			{this.props.headers.map((item, index) => 
				<HeaderElement
					selectedData = {item.selectedData}
					data = {item.data} 
					key = {index}
					setSelect = {this.props.setSelect}
					temp = {item.temp}
					pressure  = {item.pressure}
					windSpeed  = {item.windSpeed}
					main = {item.main}
					description  = {item.description}
					img = {item.img}
					clouds  = {item.clouds}
					date = {item.date}
				/>)}
				
			</ul>
		)
	}
}