import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Episodes from '../Episodes/Episodes.jsx'
import CharacterShots from '../Characters/Characters.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import Favorites from '../Favorites/Favorites.jsx';
import CharacterDetails from '../Characters/CharacterDetail.jsx';
import EpisodeDetail from '../Episodes/EpisodeDetail'
import LofiBobs from '../Chill/LofiBobs.jsx';
import "../Favorites/Favorites.css"
import "./App.css";






function App() {


    return(
      <div className='page-container'>
        <div>
          <NavBar/>
        </div>
        <InnerApp />
      </div>
    )
  }

  function InnerApp() {
    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
            <Route path="/characters" element={<CharacterShots/>} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/chill" element={<LofiBobs />} />
      
        </Routes>
      </>
    )
  }
export default App;
