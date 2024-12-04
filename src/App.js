// Import necessary modules from React library
// Import components for routing from react-router-dom library
// Import custom Navbar component
import Navbar from './Navbar.js';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing_Page from './Landing_Page.js';
import Login from './Login.js';
import Sign_Up from './Sign_Up.js';

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Landing_Page</Link>
        <Link to="/about" className="nav-item">Sign_Up</Link>
        <Link to="/contact" className="nav-item">Login</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={Landing_Page />}></Route>
        <Route path="/signup" element={<Sign_Up />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
