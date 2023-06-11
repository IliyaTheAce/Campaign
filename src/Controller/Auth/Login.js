import axios from "axios";

async function Login(user, pass) {
	await axios.post('auth/login', {
		username: user,
		password: pass
	}).then(response => {
		if (response.data.result) {
			localStorage.setItem('token', response.data.data.token);
			return true;
		} else {
			return false;
		}
	}).catch(error => {
		console.log(error.message)
		return false;
	})
}

export default Login;