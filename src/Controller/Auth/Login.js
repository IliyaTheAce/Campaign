import axios from "axios";

async function Login(user, pass) {
	let res = {};
	await axios.post('/auth/login', {
		username: user,
		password: pass
	}).then(response => {
		console.log(response);
		if (response.data.result) {
			localStorage.setItem('token', response.data.data.token);
			res = true;
		} else {
			res = false;
		}
	}).catch(error => {
		console.log(error.message)
		res = false;
	})
	return res;
}

export default Login;