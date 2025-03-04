import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css";

function Home(){
    return(
        <div>
            <header>
                <img src="https://raw.githubusercontent.com/whburkle/bobs_burgers/main/img/bobs_burgers_logo.png" />
                <Link to="/episodes" className="nav-link">Episodes</Link>
                <Link to="/characters" className="nav-link">Characters</Link>
            </header>

            <footer>
                <div className="imagecarousel">
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/3.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/4.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/5.jpg" />
                </div>
            </footer>
        </div>
    )
}

export default Home;