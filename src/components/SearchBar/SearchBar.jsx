import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters')
      .then(res => res.json())
      .then(data => setCharacters(data));
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter(character =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, characters]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCharacterClick = (id) => {
    navigate(`/characters/${id}`);
  };

  return (
    <div>
      <input
        type='text'
        value={searchInput}
        onChange={handleInputChange}
        placeholder='Search for a lovable character'
      />
     
    </div>
  );
};

export default SearchBar;
