import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename={'/'}>
    <App />
      </BrowserRouter>
  </React.StrictMode>,
)
