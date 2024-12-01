// Import necessary modules from React library
// Import components for routing from react-router-dom library
// Import custom Navbar component
import Navbar from './Navbar.js';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Landing_Page.js';
import Login from './Login.js';
import Sign_Up from './Sign_Up.js';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
              <Navbar />
                  <Routes>
                    <Route path="/" element={<Landing_Page/>}/>
                    <Route path="/signup" element={<Sign_Up/>}/>
                    <Route path="/login" element={<Login/>}/>
                    </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
