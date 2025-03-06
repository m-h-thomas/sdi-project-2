import React from "react";
import { useState } from 'react';
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard.jsx'
import DisplayEpisode from "./MainEpisodeScreen";
import CharacterTrivia from '../CharacterTrivia/CharacterTrivia';
import "./Home.css";
import Favorites from '../Favorites/Favorites.jsx'


import gif1 from '../../assets/gifs/bobs-burgers-1.gif';
import gif2 from '../../assets/gifs/bobs-burgers-2.gif';
import gif3 from '../../assets/gifs/bobs-burgers-3.gif';
import gif4 from '../../assets/gifs/bobs-burgers-4.gif';

export default function Home() {
    return (
        <div className="home-body">
            {/* Left side: CharacterTrivia and GIF grid */}
            <div className="left-side">
                <CharacterTrivia />
                <div className="gif-grid">
                    <img src={gif1} alt="GIF 1" className="gif-style" />
                    <img src={gif2} alt="GIF 2" className="gif-style" />
                    <img src={gif3} alt="GIF 3" className="gif-style" />
                    <img src={gif4} alt="GIF 4" className="gif-style" />
                </div>
            </div>

            {/* Main content: Latest Episode and Burger of the Day */}
            <div className="main-container">
                <div className="main-text">
                    <h2>Latest Episode</h2>
                </div>
                <DisplayEpisode />
            </div>
            
            <div className="chalkboard-container">
                <BoDChalkboard />
            </div>
        </div>
    );
}