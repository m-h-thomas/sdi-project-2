import React from "react";
import BoDChalkboard from '../BoDChalkboard/BoDChalkboard.jsx'
import DisplayEpisode from "./MainEpisodeScreen";
import "./Home.css";

export default function Home(){
    return(
        <div className="home-body">
            <div className="main-container">
                <div className="main-text">

                <h2>Latest Episode</h2>
                
                    {/* <p>Sample Text</p><br />
                    <p>Episode 5</p><br />
                    <p>Whatever the title is</p><br /> */}
                </div>
                <DisplayEpisode /> 
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


                  <section className="latest-episode">
                    <h2>Latest Episode</h2>
                    <DisplayEpisode />  
                  </section>

                </div>
             </div>
             <div className="chalkboard-container">
                <BoDChalkboard />
             </div>
        </div>
    )
}

