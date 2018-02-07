let initialState = {
	isLoading : false,
	history : []
}

export default function request (state = initialState, action){
	switch (action.type) {
		case "SET_SELECT":{
			let newState = JSON.parse(JSON.stringify(state));
			newState.isSelected = action.payload;
			return newState; 
		}
		case "IS_LOADING": {
			let newState = {
				isLoading : true,
				history : [...state.history]
			}
			// let newState = JSON.parse(JSON.stringify(state));
			// newState.isLoading = true;
			return newState;
		}
		case "IS_ERROR" : {
			let newState = {
				isLoading: false,
				history : [...state.history],
				error : action.payload,
			};
			// newState.error = action.payload;
			return newState;
		}
		case "IS_ACCESS" : {
			let newState = {
				isLoading: false,
				inProcess : action.payload,
				isSelected :  action.payload.list[0].dt_txt.split(" ")[0]
			};
			let history = [];
			history = state.history.filter((item) => item.city && item.city.name !== action.payload.city.name);
			newState.history = JSON.parse(JSON.stringify(history));
			if(newState.history.length === 10){
				newState.history.shift();
			}
			newState.history.push(action.payload);
			return newState;
		}
		case "SELECT_FROM_HISTORY" : {
			let inProcess = state.history.filter((item) => item.city.name === action.payload);
			let newState = {
				isLoading: false,
				history : [...state.history],
				inProcess : inProcess[0],
				isSelected : inProcess[0].list[0].dt_txt.split(" ")[0]
			}
			return newState;
		}
		default:
			return state;
	}
}