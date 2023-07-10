import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const SessionContext = createContext('');
function SessionProvider(props) {
	const [session, setSession] = useState('');
	const nav = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			const sess ="Bearer " + token;
			axios.get('auth/login-check' , {headers: { Authorization : sess}}).then((res) => {
				if(res.data.result || res.data.result === false){
					nav('login')
				}else{
					setSession(sess);
					axios.defaults.headers = {
						...axios.defaults.headers , Authorization: sess,
					}
				}
			})

		}else{
			nav('login')
		}
	} , [])
	
	return (
	 <SessionContext.Provider value={{session, setSession}}>
		 {props.children}
	 </SessionContext.Provider>
	);
}

export default SessionProvider;