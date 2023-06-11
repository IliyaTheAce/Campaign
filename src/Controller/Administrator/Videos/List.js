import axios from "axios";

async function GetList() {
	await axios.get('/contents').then(response => {
		if (response.data.result && response.data.is_logged) {
			return response.data.data.campaigns;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default GetList;