import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import NotFoundPage from "./Components/404";
import React, {createContext, useContext, useEffect, useState} from "react";
import MessageModal from "./Components/Dashboard/Modals/MessageModal";


const MessagesContext = createContext();
const App = () => {
    
    
    const [messages, setMessages] = useState([]);
    const NewMessage =({title,message,error}) => {
        const newErrors = [...messages];
        const _id = messages.length + 1;
        newErrors.push({_id,title,message,error :error ? error : false})
        setMessages(newErrors)
    }
    const DeleteMessage = async (msgId) => {
        const filtered = await messages.filter((message) => message._id !== msgId);
        console.log(filtered)
        setMessages(filtered)
    }
    
    
  return (
   <MessagesContext.Provider value={NewMessage}>
       <div className={'absolute top-10 right-10 z-50 space-y-4'}>
           {messages.map((message) => (
                <MessageModal key={message._id} {...message} deleteHandler={() => DeleteMessage(message._id)}/>
           ))}
       </div>
        <Routes>
            <Route path={'/dashboard/*'} element={<Dashboard />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/*'} element={<NotFoundPage />} />
        </Routes>
   </MessagesContext.Provider>
  )
}
export {MessagesContext}
export default App;