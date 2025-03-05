import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Episodes from '../Episodes/Episodes.jsx'
import CharacterShots from '../Characters/Characters.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import Favorites from '../Favorites/Favorites.jsx';

import "./App.css";



function App() {
    return(
      <div className='page-container'>
        <div>
          <NavBar/>
        </div>
        <InnerApp />
        <div>
          <Favorites />
        </div>
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
            <Route path="/characters" element={<CharacterShots/>} />
        </Routes>
        {/* <button onClick={() => {navigate('/')}}>Home</button>
        <button onClick={() => {navigate('/episodes')}}>Episodes</button> */}
      </>
    )
  }
export default App;
