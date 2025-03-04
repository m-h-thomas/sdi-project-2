import { useState } from 'react';
import './FavoriteButton.css'; // Ensure you import the CSS file for styling

function FavoriteButton() {
  // State to keep track of the favorited state (true/false)
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle the favorited state on click
  const handleClick = () => {
    setIsFavorited(!isFavorited);
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
