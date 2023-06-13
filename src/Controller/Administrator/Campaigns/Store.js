import axios from "axios";
import {toast} from "react-toastify";

async function Store(reqBody) {
	let res = {};
	await axios.post(`campaigns` , reqBody).then(response => {
		if(response.data.result && response.data.is_logged){
			res = response.data.data.campaign.uid;
		}
	}).catch(error => {
		console.log(error.message)
		toast.error('پاسخی از سرور دریافت نشد' , {rtl: true})
		res= false;
	})
	return res;
}

export default Store;