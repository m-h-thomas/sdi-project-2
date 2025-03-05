import React from "react";
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard.jsx'
import "./Home.css";

export default function Home(){
    return(
        <div className="home-body">
            <div className="main-container">
                <div className="main-text">
                </div>
            </div>
            <div className="chalkboard-container">
                <BoDChalkboard />
            </div>
        </div>
    )
}

