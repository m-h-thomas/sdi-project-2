import React from "react";
import "./Home.css";

function Home(){
    return(
        <div>
            <header>
                <img id="bobs_burgers_logo_container" src="https://raw.githubusercontent.com/whburkle/bobs_burgers/main/img/bobs_burgers_logo.png" />
            </header>

            <footer>
                <div className="imagecarousel">
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/3.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/4.jpg" />
                    <img src="https://bobsburgers-api.herokuapp.com/images/characters/5.jpg" />
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