import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home.jsx';





function App() {
    return(
      <div>
        {/* <Router>
          <InnerApp />
        </Router> */}
        <Home />
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