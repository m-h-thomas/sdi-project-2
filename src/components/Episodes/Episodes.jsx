import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Episodes.css";

export default function Episodes () {

  const [episodeList, setEpisodeList] = useState([])

  useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes?sortBy=id&OrderBy=asc&limit=300&skip=0')
      .then(res => res.json())
      .then(data => setEpisodeList(data))
  }, [])


  return (
    <div>
    <header>
        <img src="https://raw.githubusercontent.com/whburkle/bobs_burgers/main/img/bobs_burgers_logo.png" />
        <Link to="/episodes" className="nav-link">Episodes</Link>
        <Link to="/characters" className="nav-link">Characters</Link>
    </header>

    <div>
      <ul className="episode-list">
        {episodeList.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>

    <footer>
        <div className="imagecarousel">
            <img src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg" />
            <img src="https://bobsburgers-api.herokuapp.com/images/characters/2.jpg" />
            <img src="https://bobsburgers-api.herokuapp.com/images/characters/3.jpg" />
            <img src="https://bobsburgers-api.herokuapp.com/images/characters/4.jpg" />
            <img src="https://bobsburgers-api.herokuapp.com/images/characters/5.jpg" />
        </div>
    </footer>
</div>
  )
}