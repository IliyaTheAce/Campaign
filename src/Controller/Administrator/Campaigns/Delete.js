import axios from "axios";

async function DeleteCamp(uid) {
	let res = {};
	await axios.delete(`campaigns/${uid}`).then(response => {
		res = !!response.data.result;
	}).catch(error => {
		console.log(error.message)
		res= false;
	})
	return res;
}

export default DeleteCamp;