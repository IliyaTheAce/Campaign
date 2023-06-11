import axios from "axios";
// import {Toast} from "react-toastify/dist/components";

async function GetList() {
	await axios.get('/campaigns').then(response => {
		if (response.data.result && response.data.is_logged) {
			return response.data.data.campaigns;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		// Toast.error(error.message);
		return false;
	})
}

export default GetList;