import React, { Component } from 'react';
import { connect } from 'react-redux';
import setRequest from '../actions/setRequest';
import Loader from './Loader';
import CityResult from './CityResult';
import '../css/result.css';
import setSelect from '../actions/setSelect';
import ErrorComponent from '../components/ErrorComponent';

class Result extends Component{
	componentWillMount(){
		this.props.request("Kyiv")
	}
	render(){
		console.log(!this.props.error);
		return (
			<div>

				{this.props.isLoading ? <Loader /> : null}
				{this.props.inProcess
					?<CityResult 
						data = {this.props.inProcess}
						isSelected = {this.props.isSelected}
						setSelect = {this.props.setSelect} 
					/> 
					:<ErrorComponent /> 
				}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	isLoading : state.isLoading,
	inProcess : state.inProcess,
	isSelected : state.isSelected,
	error : state.error
})

const mapDispatchToProps = {
	request : setRequest,
	setSelect : setSelect
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)