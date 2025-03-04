import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Episodes from '../Episodes/Episodes.jsx'
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard'



function App() {
    return(
      <div>
        <InnerApp />
      </div>
    )
  }

  function InnerApp() {
    const navigate = useNavigate();
    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <button onClick={() => {navigate('/')}}>Home</button>
        <button onClick={() => {navigate('/episodes')}}>Episodes</button>
      </>
    )
  }
export default App;
