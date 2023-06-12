import axios from "axios";
import {toast} from "react-toastify";
//Administrator / Videos / List
async function GetList() {
	await axios.get('/contents').then(response => {
		if (response.data.result && response.data.is_logged) {
			return response.data.data.campaigns;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		toast.error('پاسخی از سرور دریافت نشد' , {rtl: true})
		return false;
	})
}

export default GetList;