import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Characters.css';

const CharacterDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  return (
    <div className='baseball-card'>

    <div className="details">
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
    </div>

    <div className="detail-body">
        <h3>Attributes</h3>
      <p>Gender: {data.gender}</p>
      <p>Hair Color: {data.hair}</p>
      <p>Occupation: {data.occupation}</p>

      <p>First episode: {data.firstEpisode}</p>
      <p>Voiced by: {data.voicedBy}</p>
    </div>
      
    </div>
  );
};

export default CharacterDetails;




