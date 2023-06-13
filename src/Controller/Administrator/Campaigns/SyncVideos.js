import axios from "axios";

async function SyncVideos(uid , reqBody) {
	let res = {};
	await axios.put(`campaigns/${uid}/sync-videos`, reqBody).then(response => {
		if (response.data.result && response.data.is_logged) {
			res = true;
		} else {
			res =  false;
		}
	}).catch(error => {
		console.log(error.message)
		res =  false;
	})
	return res
}

export default SyncVideos;