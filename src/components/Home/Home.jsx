import React from "react";
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard.jsx'
import DisplayEpisode from "./MainEpisodeScreen";
import CharacterTrivia from '../CharacterTrivia/CharacterTrivia';
import "./Home.css";
import Favorites from '../Favorites/Favorites.jsx'


export default function Home() {
    return (
        <div className ="home-body" data-testid='home-body'>
            {/* Left side: CharacterTrivia and GIF grid */}
            <div className="left-side">
                <CharacterTrivia />
            </div>

            {/* Main content: Latest Episode*/}
            <div className="main-container">
                <div className="main-text">
                    <h2>Latest Episode</h2>
                </div>
                <DisplayEpisode />
            </div>

            {/* Burger of the day */}
            <div className="chalkboard-container">
                <BoDChalkboard />
            </div>
        </div>
    );
}