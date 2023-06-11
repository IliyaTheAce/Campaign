import axios from "axios";

async function Update({uid , reqBody}) {
	await axios.put(`publishers/${uid}`, reqBody).then(response => {
		return !!(response.data.result && response.data.is_logged);
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default Update;