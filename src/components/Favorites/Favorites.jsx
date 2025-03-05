
import React from 'react';
import './Favorites.css'

export default function Favorites({ favorite=[] }) {
  return (
    <div className="favorites-carousel">
      <div className='carousel-content'>
        <ul className="favorite-list">
        {favorite.map(favEpisode => (
          <li key={favEpisode.id}>
          {favEpisode.name} <br /> S{favEpisode.season}E{favEpisode.episode}
          </li>
        ))}
        </ul>
      </div>
    </div>
    );
}

// {favEpisode.name} (Season {favEpisode.season}, Episode {favEpisode.episode})