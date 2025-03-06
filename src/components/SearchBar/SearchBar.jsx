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

  

  return (
    <div>
    
    </div>
  );
};

export default SearchBar;
