import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Characters.css';

const CharacterPix = ({ image, name, gender }) => (
  <div className="character-card">
    <img src={image} alt={name} />
    <p>{name} ({gender})</p>
  </div>
);

const CharacterShots = () => {
  const [char, setChar] = useState([]);

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters')
      .then(res => res.json())
      .then(data => setChar(data));
  }, []); 

  return (
    <div className='head-shots'>
      {char.map(character => (
        <CharacterPix
        
          key={character.id}
          image={character.image}
          name={character.name}
          gender={character.gender}
        
        />
      ))}
    </div>
  );
};

export default CharacterShots

