import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./MainEpisodeDisplay.css";
const API = "https://bobsburgers-api.herokuapp.com";


function DisplayEpisode() {
    const [episode, setEpisode] = useState(null);
    const [pestControl, setPestControl] = useState(null);
    const [burgerOfTheDay, setBurgerOfTheDay] = useState(null);
    const [storeNextDoor, setStoreNextDoor] = useState(null);
    

    useEffect(() => {
        async function fetchNewEpisode() {
          try {
            const response = await fetch(`${API}/episodes?season=12&episode=12`);
            const episodes = await response.json();
            if (episodes.length > 0) setEpisode(episodes[0]);

              const pestControlResponse = await fetch(`${API}/pestControlTruck?season=12&episode=12`);
              const pestControlTruck = await pestControlResponse.json();
              if (pestControlTruck.length > 0) setPestControl(pestControlTruck[0]);

              const bOTDayResponse = await fetch(`${API}/burgerOfTheDay?season=12&episode=12`);
              const bOTDay = await bOTDayResponse.json();
              if (bOTDay.length > 0) setBurgerOfTheDay(bOTDay[0]);
              
              const storeNextDoorResponse = await fetch(`${API}/storeNextDoor?season=12&episode=12`);
              const storeNextDoor = await storeNextDoorResponse.json();
              if (storeNextDoor.length > 0) setStoreNextDoor(storeNextDoor[0]);
               
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }

        
    
      fetchNewEpisode();
    }, []);

//     return (
//         <div className = "Newest-Episode">
//             <h2>Episode: {episode.name}</h2>
//             "Episode name, Date Aired"
//             "Pest Control"
//             "Store Next Door"
//             "Burger of the Day"

//         </div>
//     )
// }
    return (
     <div className="episode-container">
      
      <div className="episode-text">
      {episode && (
        <div className="episode-box">
          <p><strong> {episode.name}</strong></p>
          <p><em>Aired:</em> {episode.airDate}</p>
        </div>
      )}
          
          {burgerOfTheDay && (
              <div className="episode-section-burger">
                  <p><strong>🍔Burger of The Day:</strong> {burgerOfTheDay.name}</p>
              </div>
          )}
          </div>
          
          <div className="images">
          {pestControl && (
                <div className="episode-section-pest">
                  <p><strong>Pest Control:</strong></p>
                  {pestControl.image && (
                    <img src={pestControl.image} alt="Pest Control"/>
                  )}
                </div>
          )}



          {storeNextDoor && (
              <div className="episode-section-store">
                  <p><strong>Store Next Door:</strong></p>
                  {storeNextDoor.image && (
                    <img src={storeNextDoor.image} alt="Store Next Door"/>
                  )}
                </div>
            )}
      </div>
    </div>
     
              // <strong>Pest Control:</strong>
              //{pestControl && (
                //<p>{pestControl.detail || "No pests today."}</p>
             // )}
          //</div> */}
            // {/* https://bobsburgers-api.herokuapp.com/pestControlTruck/ + "id" */}
          //{/* <p><strong>Pest Control:</strong> {episode.pestControl || "No pests today"}</p> */}
             
          
            // {/* https://bobsburgers-api.herokuapp.com/storeNextDoor/ + id */}
        //  {/* <p><strong>Store Next Door:</strong> {episode.storeNextDoor || ""}</p> */}
          //  {/* https://bobsburgers-api.herokuapp.com/burgerOfTheDay/ */}
          //{/* <p><strong>Burger of the Day:</strong> {episode.burgerOfTheDay || "What Burger??"}</p>
        //</div> */}
      
 
  );
}

export default DisplayEpisode;

{/* // season 12/ episode 12 */}
{/* //Episode name: id =  "id": 227, */}
{/* //Burger = "id": 333, */}
{/* //Store next door = "id": 217, with image */}