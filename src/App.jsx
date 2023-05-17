import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import ReportView from "./Components/Dashboard/Views/ReportView";
import NotFoundPage from "./Components/404";
function App() {

  return (
      <Routes>
          <Route path={'/dashboard/*'} element={<Dashboard />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
