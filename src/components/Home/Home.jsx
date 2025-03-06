import React from "react";
import { useState } from 'react';
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard.jsx'
import DisplayEpisode from "./MainEpisodeScreen";
import "./Home.css";
import Favorites from '../Favorites/Favorites.jsx'

export default function Home(){
    return(
        <div className="home-body">
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
    )
}

