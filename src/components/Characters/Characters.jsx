import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './Characters.css';

const CharacterPix = ({ image, name, gender, onClick }) => (
  <div className="character-card" onclick={onClick}>
    <img src={image} alt={name} />
    <p>{name} ({gender})</p>
  </div>
);

const CharacterShots = () => {
  const [char, setChar] = useState([]);
  const navigate =useNavigate();

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters')
      .then(res => res.json())
      .then(data => setChar(data));
  }, []); 

  const imageClick = (id) =>{
    navigate('/characters/${id}');
  };

  return (
    <div className='head-shots'>
      {char.map(character => (
        <CharacterPix
        
          key={character.id}
          image={character.image}
          name={character.name}
          gender={character.gender}
          onClick={()=> imageClick(character.id)}
        
        />
        
      ))}
    </div>
  );
};

export default CharacterShots

