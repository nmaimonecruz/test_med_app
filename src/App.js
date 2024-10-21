// Import necessary modules from React library
// Import components for routing from react-router-dom library
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
              <Navbar/>
                  <Routes>
                    <Route path="/" element={<Landing_Page/>}/>
                    </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
