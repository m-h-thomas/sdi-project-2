import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css";
import NavBar from "../NavBar/NavBar";

function Home(){
    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="main-container">

            </div>

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