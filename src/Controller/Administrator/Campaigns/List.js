import axios from "axios";
import {toast} from "react-toastify";

// import {Toast} from "react-toastify/dist/components";

 const GetList = async(category, keywords) => {
	 let data = {};
	await axios.get('/campaigns', {
		params: {
			keyword: keywords, category_id: category
		}
	}).then(response => {
		if (response.data.result) {
			data = response.data.data.campaigns;
		} else {
			data = false;
		}
	}).catch(error => {
		console.log(error.message)
		toast.error('پاسخی از سرور دریافت نشد', {rtl: true})
		data = false;
	})
	 return data;
}

export default GetList;