import React, {createContext, useEffect, useState} from 'react';
import GetCommonData from "../Controller/Common/CommonData";
import commonData from "../Controller/Common/CommonData";
import axios from "axios";

export const commonDataContext = createContext('');

function CommonDataProvider(props) {
	const [CommonData, setCommonData] = useState({});
	
	const FetchData = async () => {
		await axios.get('common-data').then(response => {
			if (response.data.result) {
				setCommonData(response.data.data);
			} else {
				return false;
			}
		}).catch(error => {
			console.log(error.message)
			return false;
		})
	}
	
	useEffect(() => {
		FetchData();
	}, [])
	
	return (
	 <commonDataContext.Provider value={CommonData}>
		 {props.children}
	 </commonDataContext.Provider>
	);
}

export default CommonDataProvider;