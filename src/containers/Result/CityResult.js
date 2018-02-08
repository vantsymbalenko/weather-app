import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ResultHeader from '../../components/Result/ResultHeader';
import ResultOneDay from '../../components/Result/ResultOneDay';
import setSelect from '../../actions/setSelect';

class CityResult extends Component{
	render(){
		let data = '',
		headerElements  =  [],
		maxTemp, 
		minTemp, 
		temp,
		detailInfo  = this.props.inProcess.list.filter((item) =>  item.dt_txt.split(" ")[0] === this.props.isSelected),
		options = {
			weekday : 'long',
			day 	: 'numeric',
			month 	: 'short'
		};
		this.props.inProcess.list.forEach((item) => {
			if(item.dt_txt.split(" ")[0].split("-")[2] !== data){

				data 	= item.dt_txt.split(" ")[0].split("-")[2];
				maxTemp = Math.round(item.main.temp_max - 273);
				minTemp = Math.round(item.main.temp_min -273)
				temp 	= (maxTemp === minTemp) ? minTemp : (`${minTemp} - ${maxTemp}`);

				headerElements.push({
					temp 		 : temp,
					data 		 : item.dt_txt.split(" ")[0],
					clouds 		 : item.clouds.all,
					imgSrc 		 : `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
					imgTitle	 : item.weather[0].main,
					pressure 	 : item.main.pressure,
					windSpeed 	 : item.wind.speed,
					headerDate	 : new Date(item.dt_txt).toLocaleString("en-GB", options),
					description  : item.weather[0].description,
				});
			}	
		});

		return(
			<div className="city-result">
				<ResultHeader 
					headerElements = {headerElements} 
					isSelected 	   = {this.props.isSelected} 
					setSelect 	   = {this.props.setSelect}
				/>
				<ResultOneDay detailInfo = { detailInfo }/>	
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	inProcess  : state.inProcess,
	isSelected : state.isSelected
});

const mapDispatchToProps = {
	setSelect : setSelect
};

CityResult.propTypes = {
	setSelect 	: PropTypes.func,
	isSelected 	: PropTypes.string.isRequired,
	inPropcess 	: PropTypes.shape({
		list 	: PropTypes.arrayOf(PropTypes.shape({
				dt_txt 	: PropTypes.string.isRequired,
				main 	: PropTypes.shape({
					temp_max : PropTypes.number.isRequired,
					temp_min : PropTypes.number.isRequired,
					pressure : PropTypes.number.isRequired,
				}),
				weather : PropTypes.arrayOf(PropTypes.shape({
					main 	   : PropTypes.string.isRequired,
					icon 	   : PropTypes.string.isRequired,
					decription : PropTypes.string.isRequired
				}))
		}))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(CityResult)