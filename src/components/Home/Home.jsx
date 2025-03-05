import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css";

import DisplayEpisode from "./MainEpisodeScreen";

import NavBar from "../NavBar/NavBar";


function Home(){
    return(
        <div className="home-body">
            <header>
                <NavBar/>
            </header>
            <div className="main-container">
                <div className="main-text">
                    <p>Sample Text</p><br />
                    <p>Episode 5</p><br />
                    <p>Whatever the title is</p><br />
                </div>
            </div>

            <section className="latest-episode">
                <h2>Latest Episode</h2>
                <DisplayEpisode />  
            </section>


            <footer>
                <div className="imagecarousel">
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/3.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/4.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/5.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/3.jpg" />

                </div>
            </footer>
        </div>
    )
}

export default Home;