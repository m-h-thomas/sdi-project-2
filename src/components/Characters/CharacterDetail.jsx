import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  return (
    <div className="details">
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p>Gender: {data.gender}</p>
      <p>Occupation: {data.occupation}</p>
      {/* Add more character details as needed */}
    </div>
  );
};

export default CharacterDetails;




