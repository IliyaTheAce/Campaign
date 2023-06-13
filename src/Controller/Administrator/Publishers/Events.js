import axios from "axios";

async function GetEvents(uid) {
	let res = {};
	await axios.get(`publishers/${uid}/events`).then(response => {
		if (response.data.result) {
			res = response.data.data.events;
		} else {
			res= false;
		}
	}).catch(error => {
		console.log(error.message)
		res= false;
	})
	return res;
}

export default GetEvents;