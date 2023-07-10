import axios from "axios";

async function Update(uid , reqBody) {
	let res = false;
	await axios.put(`campaigns/${uid}`, reqBody).then(response => {
		res =  !!(response.data.result && response.data.is_logged);
	}).catch(error => {
		console.log(error.message)
		res = false;
	})
	return res;
}

export default Update;