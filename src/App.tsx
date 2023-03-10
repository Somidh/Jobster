import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddJobs from "./pages/AddJobs";
import AllJobs from "./pages/AllJobs";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addjobs" element={<AddJobs />} />
        <Route path="/alljobs" element={<AllJobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
