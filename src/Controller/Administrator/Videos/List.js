import axios from "axios";
import {toast} from "react-toastify";
//Administrator / Videos / List
async function GetList(keywords) {
	let data = {};
	await axios.get('/contents', {params:{
		keyword: keywords
		}}).then(response => {
		if (response.data.result) {
			data = response.data.data.contents;
		} else {
			data = false;
		}
	}).catch(error => {
		console.log(error.message)
		toast.error('پاسخی از سرور دریافت نشد' , {rtl: true})
		data = false;
	})
	return data;
}

export default GetList;