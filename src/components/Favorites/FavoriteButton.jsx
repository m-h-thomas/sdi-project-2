import { useState } from 'react';
import './FavoriteButton.css';

function FavoriteButton({ episode, onToggleFavorite, isFavorited }) {
  const handleClick = () => {
    onToggleFavorite(episode); // Toggle favorite status on click
  };

  return (
    <button
      className="favorite-btn"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${isFavorited ? '/images/burger-favorite.png' : '/images/burger-outline.png'})`
      }}
    >
    </button>
  );
}

export default FavoriteButton;
