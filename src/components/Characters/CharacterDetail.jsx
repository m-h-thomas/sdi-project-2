import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Characters.css';
import NavBar from "../NavBar/NavBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CharacterDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  return (
    
    <div>
        <NavBar/>
        

    <Card sx={{ maxWidth: 345, marginTop:10, marginLeft:'40vw' }}>
      
        <CardMedia
          component="img"
          height=""
          image={data.image}
          alt={data.name}
          sx={{objectFit:'fill', width: '100%', maxHeight:'500px'}}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Gender: {data.gender} <br/>
            Hair Color:{data.hair} <br/>
            Occupation: {data.occupation}<br/>
            First Episode: {data.firstEpisode} <br/>
            Voiced by: {data.voicedBy}
          </Typography>
        </CardContent>
     
    </Card>
          </div>
  );
}

    // <>
    // <NavBar/>
    // <div className='baseball-card'>

    // <div className="details">
    //   <img src={data.image} alt={data.name} />
    //   <h1>{data.name}</h1>
    // </div>

    // <div className="detail-body">
    //     <h3>Attributes</h3>
    //   <p>Gender: {data.gender}</p>
    //   <p>Hair Color: {data.hair}</p>
    //   <p>Occupation: {data.occupation}</p>

    //   <p>First episode: {data.firstEpisode}</p>
    //   <p>Voiced by: {data.voicedBy}</p>
    // </div>
      
    // </div>
    // </>
//   );
// };

export default CharacterDetails;




