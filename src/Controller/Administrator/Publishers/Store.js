import axios from "axios";

async function Store({reqBody}) {
	await axios.post(`/publishers` , reqBody).then(response => {
		return !!(response.data.result && response.data.is_logged);
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default Store;