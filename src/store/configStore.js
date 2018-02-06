import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function (initialState){
	let store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
	return store;
}