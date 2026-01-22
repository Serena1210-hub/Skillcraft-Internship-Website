import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Application from "./pages/Application";
import Assessment from "./pages/Assessment";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
