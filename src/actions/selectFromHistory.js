export default function selectFromHistory(city){
	console.log(city);
	return {
		type: "SELECT_FROM_HISTORY",
		payload: city
	}
}