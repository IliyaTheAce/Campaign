import axios from "axios";

async function GetList(keywords) {
	let res = {};
	await axios.get('/publishers',{
		params:{keyword:keywords}
	}).then(response => {
		if (response.data.result) {
			res = response.data.data.publishers;
		} else {
			res = false;
		}
	}).catch(error => {
		console.log(error.message)
		res = false;
	})
	return res;
}

export default GetList;