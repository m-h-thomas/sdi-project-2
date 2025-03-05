import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Favorites.css";

export default function Favorites(){
    return(
        <div className="imagecarousel">
            <div className="carousel-content">
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
        </div>
    )
}