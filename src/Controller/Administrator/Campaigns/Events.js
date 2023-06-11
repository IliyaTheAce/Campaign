import axios from "axios";

async function GetEvents({uid}) {
	await axios.get(`campaigns/${uid}/events`).then(response => {
		if (response.data.result && response.data.is_logged) {
			return response.data.data.events;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default GetEvents;