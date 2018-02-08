export default function selectFromHistory(city){
	return {
		type: "SELECT_FROM_HISTORY",
		payload: city
	}
}