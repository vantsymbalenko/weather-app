export default function newHistoryElement(element){
	return {
		type: "ADD_HISTORY_ELEMENT",
		payload: element
	}
}