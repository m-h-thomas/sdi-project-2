import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from 'components/Home/Home.jsx';
import Episodes from 'components/Episodes/Episodes.jsx';




function App() {
    return(
      <div>
        <h1>Hello</h1>
        <Router>
          <InnerApp />
        </Router>
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
            {/* <Route path="/characters" element={<Characters />} /> */}
        </Routes>
        <button onClick={() => {navigate('/')}}>Home</button>
        <button onClick={() => {navigate('/episodes')}}>Episodes</button>
        {/* <button onClick={() => {navigate('/characters')}}>Characters</button> */}
      </>
    )
  }
export default App;