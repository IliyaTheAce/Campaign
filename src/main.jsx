import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App'
import './index.css'
import axios from "axios";
import SessionProvider from "./Utilities/SessionProvider";

axios.defaults.baseURL = "https://localhost:8080"
axios.defaults.headers = {
	"Content-Type": "application/json",
	"Accept": "application/json",
}
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
	 <BrowserRouter basename={'/'}>
		 <SessionProvider>
			 <App/>
		 </SessionProvider>
	 </BrowserRouter>
 </React.StrictMode>,
)
