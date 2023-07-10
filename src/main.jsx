import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App'
import './index.css'
import axios from "axios";
import CommonDataProvider from "./Utilities/CommonDataProvider";
import SessionProvider from "./Utilities/SessionProvider";

axios.defaults.baseURL = "https://adsapitest.iran.liara.run/api"
axios.defaults.headers = {
	"Content-Type": "application/json",
	"Accept": "application/json",
	// 'Access-Control-Allow-Origin': "*",
	// 'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
	 <BrowserRouter basename={'/'}>
		 <SessionProvider>
			 <CommonDataProvider>
				 <App/>
			 </CommonDataProvider>
		 </SessionProvider>
	 </BrowserRouter>
 </React.StrictMode>,
)
