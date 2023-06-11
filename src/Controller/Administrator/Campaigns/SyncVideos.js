import axios from "axios";

async function SyncVideos({uid , reqBody}) {
	await axios.put(`campaigns/${uid}/sync-videos`, reqBody).then(response => {
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

export default SyncVideos;