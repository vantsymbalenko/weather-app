import React, { Component } from 'react';
import { connect } 			from 'react-redux';
import PropTypes 			from 'prop-types';

import Loader     		from '../../components/Loader';
import ErrorComponent 	from '../../components/ErrorComponent';
import CityResult 		from './CityResult';

import setRequest from '../../actions/setRequest';
import '../../css/result.css';

class Result extends Component{
	componentWillMount(){
		this.props.request("Kyiv")
	}
	render(){
		return (
			<div>
				{this.props.isLoading	? <Loader />         : null}
				{this.props.inProcess   ? <CityResult/>      : null }
				{this.props.error 		? <ErrorComponent error = {this.props.error}/> : null}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	isLoading : state.isLoading,
	inProcess : state.inProcess,
	error 	  : state.error
});

const mapDispatchToProps = {
	request : setRequest
};

Result.propTypes = {
	request 	: PropTypes.func.isRequired,
	isLoading 	: PropTypes.bool.isRequired,
	error 		: PropTypes.string,
	inProcess 	: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);