import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar(){
    return(
        <div className="header">
            <Link to="/">
            <img src="https://raw.githubusercontent.com/whburkle/bobs_burgers/main/img/bobs_burgers_logo.png" />
            </Link>
            <div className="navbar">
                <Link to="/episodes" className="nav-link">
                    Episodes
                </Link>
                <Link to="/characters" className="nav-link">
                    Characters
                </Link>
            </div>
        </div>
    )
}