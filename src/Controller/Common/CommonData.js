import axios from "axios";

async function GetCommonData() {
	await axios.get('common-data').then(response => {
		if (response.data.result) {
		return response;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default GetCommonData;