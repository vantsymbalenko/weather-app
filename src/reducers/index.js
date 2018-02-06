import { combineReducers } from 'redux';
import request from './request';
import history from './history';

export default combineReducers({
	request,
	history
})