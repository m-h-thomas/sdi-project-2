
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Favorites.css'

export default function Favorites({ favorite = [] }) {

  const navigate = useNavigate()

  const cardClick = (id) => {
    navigate(`/episodes/${id}`);
  };

  return (
    <div className="favorites-carousel">
      <div className='carousel-content'>
        <ul className="favorite-list">
        {favorite.map(favEpisode => (
          <li key={favEpisode.id} onClick={() => cardClick(favEpisode.id)}>
          {favEpisode.name} <br /> S:{favEpisode.season} E:{favEpisode.episode}
          </li>
        ))}
        </ul>
      </div>
    </div>
    );
}

// {favEpisode.name} (Season {favEpisode.season}, Episode {favEpisode.episode})