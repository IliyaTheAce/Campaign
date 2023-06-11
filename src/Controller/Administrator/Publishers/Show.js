import axios from "axios";

async function Show({uid , reqBody}) {
	await axios.get(`publishers/${uid}`, reqBody).then(response => {
		if (response.data.result && response.data.is_logged) {
			return response.data.data.campaign;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default Show;