import axios from "axios";
import {toast} from "react-toastify";

async function Store({reqBody}) {
	await axios.post(`campaigns` , reqBody).then(response => {
		return !!(response.data.result && response.data.is_logged);
	}).catch(error => {
		console.log(error.message)
		toast.error('پاسخی از سرور دریافت نشد' , {rtl: true})
		return false;
	})
}

export default Store;