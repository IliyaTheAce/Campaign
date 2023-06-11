import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
const SessionContext = createContext('');
function SessionProvider(props) {
	const [session, setSession] = useState('');
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			const sess ="Bearer " + token;
			setSession(sess);
			axios.defaults.headers = {
				...axios.defaults.headers , Authorization: sess,
			}
		}
	} , [])
	
	return (
	 <SessionContext.Provider value={{session, setSession}}>
		 {props.children}
	 </SessionContext.Provider>
	);
}

export default SessionProvider;