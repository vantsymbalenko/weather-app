export default function request(state ={}, action){
	console.log(action);
	switch (action.type) {
		case "IS_LOADING":
			return {
				isLoading : true
			}
		case "IS_ERROR" :
			return action.payload
		case "IS_ACCESS":
			return action.payload
		default:
			return state;
	}
}