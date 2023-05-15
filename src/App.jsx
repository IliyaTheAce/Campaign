import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Route, Router, Routes} from "react-router-dom";
function App() {

  return (
      <Routes>
        <Route path={'/dashboard/*'} element={<Dashboard />} />
        <Route path={'/login'} element={<Login />} />
          <Route path={'/*'} element={<h1>404 No page found!</h1>} />

      </Routes>
  )
}

export default App
