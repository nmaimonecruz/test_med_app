import logo from './logo.svg';
import './App.css';
import InstantConsultation from './components/InstantConsultation/InstantConsultation';  

function App() { 
  return (
    <>
    <Routes>
    <Route path="/instant-consultation" element={<InstantConsultation />} /> 
    </Routes>

    </>)
}

export default App;
