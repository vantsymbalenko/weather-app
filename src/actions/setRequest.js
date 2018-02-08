const IS_LOADING = "IS_LOADING",
	  IS_ERROR 	 = "IS_ERROR",
	  IS_ACCESS  = "IS_SUCCESS",
 	  APP_ID 	 = "6507c3983ce8c946550ac3534670d550",
 	  status 	 = (response) => {
		if(response.status !== 200){
			return Promise.reject(new Error(response.statusText + " " + response.status))
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

function isSuccess(data){
	return {
		type: IS_ACCESS,
		payload : data
	}
}

export default function request(city){
	return (dispatch) => {
		dispatch(loaderAction());
		return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APP_ID}`)
			.then(status)
			.then(response => response.json())
			.then(json => {
				dispatch(isSuccess(json));
			})
			.catch(error => {
				console.log(error);
				dispatch(isError(error.message))
			})
	}
}
