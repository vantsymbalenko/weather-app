export default function history(state = [], action){
	console.log(action);
	switch (action.type) {
		case "ADD_HISTORY_ELEMENT":{
			// let newState = JSON.parse(JSON.stringify(state));
				let newState = state.filter((item) => item.city && item.city.name !== action.payload.city.name);	
			if(newState.length === 10){
				newState.shift();
			}
			newState.push(action.payload)	

			return newState;
		}
		default:
			return state
	}
}