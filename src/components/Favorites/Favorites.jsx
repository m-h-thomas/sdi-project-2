
import React from 'react';
import './Favorites.css'

export default function Favorites({ favorite=[] }) {
  return (
    <div className="favorite-list-container">
      <h2>My Favorite Episodes</h2>
      {favorite.length > 0 ? (
        <ul className="favorite-list">
          {favorite.map(favEpisode => (
            <li key={favEpisode.id}>
              {favEpisode.name} (Season {favEpisode.season}, Episode {favEpisode.episode})
            </li>
          ))}
        </ul>
      ) : (
        <h4>No favorite episodes yet.</h4> // If there are no favorites
      )}
    </div>
  );
}
