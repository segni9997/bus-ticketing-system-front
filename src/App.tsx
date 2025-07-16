import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./layouts/dashboardLayout"
function App() {

  return (
    <>
      <Router>
        <Routes>
<Route element=<Dashboard/> path="/dashboard" />
        </Routes>
    </Router>
    </>
  )
}

export default App
