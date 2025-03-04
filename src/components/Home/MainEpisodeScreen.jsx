import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./MainEpisode.css";
// API = "https://bobsburgers-api.herokuapp.com";


function DisplayEpisode() {
    const [episode, setEpisode] = useState(null);
    const [pestControl, setPestControl] = useState(null);
    const [burgerOfTheDay, setBurgerOfTheDay] = useState(null);
    const [storeNextDoor, setStoreNextDoor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNewEpisode() {
            setLoading(true);
          try {
            const response = await fetch("https://bobsburgers-api.herokuapp.com/episodes?sortBy=id&OrderBy=desc&limit=1");
            const episodes = await response.json();
    
            if (episodes.length > 0) {
              setEpisode(episodes[0]);
            }
          } catch (error) {
            console.error("error, try again:", error);
          } finally {
            setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : episode ? (
        <div className="episode-box">
          <p><strong>Latest Episode:</strong> {episode.name}</p>
          <p><em>Aired:</em> {episode.airDate}</p>
             {/* https://bobsburgers-api.herokuapp.com/pestControlTruck/ + "id" */}
          {/* <p><strong>Pest Control:</strong> {episode.pestControl || "No pests today"}</p> */}
             {/* https://bobsburgers-api.herokuapp.com/storeNextDoor/ + id */}
          {/* <p><strong>Store Next Door:</strong> {episode.storeNextDoor || ""}</p> */}
            {/* https://bobsburgers-api.herokuapp.com/burgerOfTheDay/ */}
          <p><strong>Burger of the Day:</strong> {episode.burgerOfTheDay || "What Burger??"}</p>
        </div>
      ) : (
        <p>No episode data available.</p>
      )}
    </div>
  );
}

export default DisplayEpisode;

// season 12/ episode 12
//Episode name: id =  "id": 227,
//Burger = "id": 333,
//Store next door = "id": 217, with image