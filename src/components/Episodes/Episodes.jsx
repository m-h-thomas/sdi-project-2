// Episodes.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Episodes.css";
import NavBar from "../NavBar/NavBar";
import FavoriteButton from "../Favorites/FavoriteButton";
import Favorites from "../Favorites/Favorites"; // Import the Favorites component

export default function Episodes() {
  const [episodeList, setEpisodeList] = useState([]);
  const [favorite, setFavorite] = useState([]);

  // Fetch episodes data
  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes?sortBy=id&OrderBy=asc&limit=300&skip=0')
      .then(res => res.json())
      .then(data => setEpisodeList(data));

    // Load favorite episodes from localStorage when the component mounts
    const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavorite(savedFavorites); // Initialize the state with saved favorites (if any)
  }, []);

  const sortedEpisodes = episodeList.sort((a, b) => a.season - b.season);

  const groupedBySeason = sortedEpisodes.reduce((groups, episode) => {
    const season = episode.season;
    if (!groups[season]) {
      groups[season] = [];
    }
    groups[season].push(episode);
    return groups;
  }, {});

  // Function to handle adding/removing episodes from favorites
  const handleToggleFavorite = (episode) => {
    setFavorite(prevFavorites => {
      let updatedFavorites;
      if (prevFavorites.some(fav => fav.id === episode.id)) {
        // If episode is already in favorites, remove it
        updatedFavorites = prevFavorites.filter(fav => fav.id !== episode.id);
      } else {
        // Otherwise, add the episode to favorites
        updatedFavorites = [...prevFavorites, episode];
      }

      // Save the updated favorites list to localStorage
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div>
        <h1>Episode List</h1>

        {Object.keys(groupedBySeason).map((season) => (
          <div key={season}>
            <h2>Season {season}</h2>
            <ul className="episode-list">
              {groupedBySeason[season].map((episode) => (
                <li key={episode.id}>
                  Episode: {episode.episode}
                  <div>{episode.name}</div>
                  <FavoriteButton
                    episode={episode}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorited={favorite.some(fav => fav.id === episode.id)} // Check if the episode is favorited
                  />
                  <div><a href={episode.wikiUrl} target="_blank" rel="noopener noreferrer">Wiki</a></div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Render the Favorites Component */}
        <Favorites favorite={favorite} />
      </div>
    </div>
  );
}
