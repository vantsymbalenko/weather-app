export default function history(state = [], action){
	console.log(action);
	switch (action.type) {
		case "ADD_HISTORY_ELEMENT":
			let newState = state.filter((item) => item.name !== action.payload.name);
			if(newState.length === 10){
				newState.shift();
			}
			newState.push(action.payload)
			return newState;
		default:
			return state
	}
}