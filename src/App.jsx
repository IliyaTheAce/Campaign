import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Route, Routes, Navigate} from "react-router-dom";
import NotFoundPage from "./Components/404";
import React, {useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    
    return (
     <>
         <ToastContainer />
         <Routes>
             <Route path={"/"} exact element={<Navigate to={'/dashboard'} />} />
             <Route path={'/dashboard/*'} element={<Dashboard />} />
             <Route path={'/login'} element={<Login />} />
             <Route path={'/*'} element={<NotFoundPage />} />
         </Routes>
     </>
    )
}
export default App;