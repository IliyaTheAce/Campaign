import axios from "axios";

async function Store(reqBody) {
	console.log(reqBody)
	let res = {}
	await axios.post(`/publishers`, reqBody).then(response => {
		res = !!(response.data.result && response.data.is_logged);
	}).catch(error => {
		console.log(error.message)
		res = false;
	})
	return res;
}

export default Store;