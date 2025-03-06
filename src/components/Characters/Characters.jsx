import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './Characters.css';
import NavBar from "../NavBar/NavBar";

const CharacterPix = ({ image, name, onClick }) => (
  <div className="character-card" onClick={onClick}>
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

const CharacterShots = () => {
  const [char, setChar] = useState([]);
  const navigate = useNavigate();
  const[search, setSearch]=useState('');
  const [filter, setFilter]=useState([]);

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters')
      .then(res => res.json())
      .then(data => {
        setChar(data);
      setFilter(data);});
  }, []);

  useEffect(()=>{
    setFilter(
      char.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  },[search, char]);

  const handleInput=(event) =>{
    setSearch(event.target.value);
  }

  const imageClick = (id) => {
    navigate(`/characters/${id}`);
  };

  return (
   <>
   <NavBar/>
   <div className='seach-container'>

   <input
   className='search-bar'
   type='text'
   value={search}
   onChange={handleInput}
   placeholder='Search for a lovable character'
   />
   </div>
    <div className='head-shots'>
      {filter.map(character => (
        <CharacterPix

          key={character.id}
          image={character.image}
          name={character.name}
          onClick={() => imageClick(character.id)}

        />

      ))}
    </div>
      </>
  );
};


export default CharacterShots;



