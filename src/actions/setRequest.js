import newHistoryElement from './newHistoryElement';

const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";
const IS_ACCESS = "IS_ACCESS";
const status = (response) => {
	console.log(response);
	if(response.status !== 200){
		return Promise.reject(new Error(response.statusText))
	}
	return Promise.resolve(response);
}

function loaderAction(){
	return {
		type: IS_LOADING
	}
}

function isError(error){
	return{
		type: IS_ERROR,
		payload : {
			error : error
		}
	}
}

function isAlright(data){
	return {
		type: IS_ACCESS,
		payload : data
	}
}

export default function request(city){
	return (dispatch) => {
		dispatch(loaderAction());
		return fetch("http://www.mocky.io/v2/5a79bc192e000028009a5c0c")
			.then(status)
			.then(response => response.json())
			.then(json => {console.log(json); dispatch(isAlright(json)); dispatch(newHistoryElement(json));})
			.catch(error => {
				console.log(error);
				dispatch(isError(error.message))
			})
	}
}
