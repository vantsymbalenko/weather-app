export default function request(state ={}, action){
	console.log(action);
	switch (action.type) {
		case "SET_SELECT" :{
			let newState = JSON.parse(JSON.stringify(state));
			newState.isSelected = action.payload;
			return newState;
		}
		case "IS_LOADING":
			return {
				isLoading : true
			}
		case "IS_ERROR" :
			return action.payload
		case "IS_ACCESS":
			return {
				isSelected : action.payload.list[0].dt_txt.split(" ")[0],
				...action.payload
			}
		default:
			return state;
	}
}