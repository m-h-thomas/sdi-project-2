import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Episodes.css";
import FavoriteButton from "../Favorites/FavoriteButton";

export default function Episodes() {
  const [episodeList, setEpisodeList] = useState([]);

  // Fetch episodes data
  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes?sortBy=id&OrderBy=asc&limit=300&skip=0')
      .then(res => res.json())
      .then(data => setEpisodeList(data));
  }, []);

  // Sort episodes by season number
  const sortedEpisodes = episodeList.sort((a, b) => a.season - b.season);

  // Group episodes by season
  const groupedBySeason = sortedEpisodes.reduce((groups, episode) => {
    const season = episode.season;
    if (!groups[season]) {
      groups[season] = [];
    }
    groups[season].push(episode);
    return groups;
  }, {});

  return (
    <div>
      <div>
        <h1>Episode List</h1>

        {/* Render episodes grouped by season */}
        {Object.keys(groupedBySeason).map((season) => (
          <div key={season}>
            <h2>Season {season}</h2>
            <ul className="episode-list">
              {groupedBySeason[season].map((episode) => (
                <li key={episode.id}>
                  Season: {episode.season}, Episode: {episode.episode}
                  <div>{episode.name}</div>
                  <FavoriteButton />
                  <div><a href={episode.wikiUrl} target="_blank">Wiki</a></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
