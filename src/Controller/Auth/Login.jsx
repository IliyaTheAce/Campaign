import React from 'react';
import axios from "axios";

async function Login(user, pass) {
	//TODO: remove below line for production
	return true;
	
	await axios.post('/authentication/login', {
		username: user,
		password: pass
	}).then(response => {
		if (response.status === true) {
			localstorage.setItem('token', response.data.token);
			localstorage.setItem('user', response.data.username);
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