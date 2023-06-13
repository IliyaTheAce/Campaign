import axios from "axios";

async function Show(uid) {
	let res ={};
	await axios.get(`publishers/${uid}`).then(response => {
		if (response.data.result) {
			res =  response.data.data.publisher;
		} else {
			res = false;
		}
	}).catch(error => {
		console.log(error.message)
		res = false;
	})
	return  res;
}

export default Show;