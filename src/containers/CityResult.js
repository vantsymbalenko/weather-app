import React, { Component } from 'react';
import ResultHeader from './ResultHeader';
import ResultOneDay from './ResultOneDay';

export default class CityResult extends Component{
	render(){
		console.log(this.props.data);
		// let maxTemp = Math.round((this.props.data.main.temp_max - 273)* 100) / 100,
		// 	minTemp = Math.round((this.props.data.main.temp_min - 273)* 100) / 100,
		// 	pressure  = this.props.data.main.pressure,
		// 	windSpeed  = this.props.data.wind.speed,
		// 	main = this.props.data.weather[0].main,
		// 	description  = this.props.data.weather[0].description,
		// 	img = `http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`,
		// 	clouds  = this.props.data.clouds.all;
		let data = '';
		let headerElements  =  [];
		let header = this.props.data.list.filter((item) => {
			if(item.dt_txt.split(" ")[0].split("-")[2] !== data){
				data = item.dt_txt.split(" ")[0].split("-")[2];
				let maxTemp = Math.round(item.main.temp_max - 273);
				let minTemp = Math.round(item.main.temp_min -273)
				let temp = maxTemp === minTemp ? minTemp : `${minTemp} - ${maxTemp}`;
				headerElements.push({
					temp: temp,
					pressure : item.main.pressure,
					windSpeed : item.wind.speed,
					main: item.weather[0].main,
					description : item.weather[0].decription,
					img : `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
					clouds : item.clouds.all,
					date : new Date(item.dt_txt).toLocaleString("en-GB", {weekday: 'long', day: 'numeric', month : 'short'}),
					data : item.dt_txt.split(" ")[0],
					selectedData : this.props.isSelected
				});
				return true
			}	
		});
		let oneDay  = this.props.data.list.filter((item) => { 
			console.log(item.dt_txt.split(" ")[0]);
			if(item.dt_txt.split(" ")[0] === this.props.isSelected){
				return true;
			}
			return false;
		});
		console.log(oneDay);
		console.log(headerElements);
		return(
			<div className="city-result">
				<ResultHeader headers = {headerElements} setSelect = {this.props.setSelect}/>
				<ResultOneDay oneDay = {oneDay}/>	
			</div>
		)
	}
}