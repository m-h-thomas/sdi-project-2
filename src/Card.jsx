import React from 'react';
import favoriteList from './favoriteList';

const FavoriteCard = ({ title, season, episode }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>Season {season} Episode: {episode}</p>
  </div>
);

function Fav() {
  return (
    <div className="card-container">
      {favoriteList.map(item => (
        <FavoriteCard
          key={item.id}
          title={item.name}
          season={item.season}
          episode={item.episode}
        />
      ))}
    </div>
  );
}

export default Fav;
