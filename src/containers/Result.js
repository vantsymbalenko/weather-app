import React, { Component } from 'react';
import { connect } from 'react-redux';
import setRequest from '../actions/setRequest';

class Result extends Component{
	componentWillMount(){
		this.props.request()
	}
	render(){
		return (
			<div>
				<div>{this.props.element.isLoading ? "Loading" : null}</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	element : state.request

})

const mapDispatchToProps = {
	request : setRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)