import newHistoryElement from './newHistoryElement';

const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";
const IS_ACCESS = "IS_ACCESS";
const status = (response) => {
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
		payload : error
	}
}

function isAlright(data){
	return {
		type: IS_ACCESS,
		payload : data
	}
}
// http://www.mocky.io/v2/5a79bc192e000028009a5c0c
// http://www.mocky.io/v2/5a7b0f7a3000004f1d28bd12
export default function request(city){
	return (dispatch) => {
		dispatch(loaderAction());
		return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6507c3983ce8c946550ac3534670d550`)
			.then(status)
			.then(response => response.json())
			.then(json => {
				dispatch(isAlright(json));
			})
			.catch(error => {
				console.log(error);
				dispatch(isError(error.message))
			})
	}
}
