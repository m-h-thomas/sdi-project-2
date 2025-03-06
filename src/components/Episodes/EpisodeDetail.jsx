import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function EpisodeDetail () {

  const [ episodeDetails, setEpisodeDetails ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/episodes/${id}`)
      .then(res => res.json())
      .then(data => setEpisodeDetails(data))
  }, [id])


  return (
    <>
      <NavBar />

      <div className="episode-detail-container">

      <h1>{episodeDetails.name}</h1>
        <h2>Season: {episodeDetails.season} Episode: {episodeDetails.episode}</h2>
        <h2>Episode Description</h2>
          <p>{episodeDetails.description}</p>
        <h2>Original Air Date</h2>
          <p>{episodeDetails.airDate}</p>
        <h2>Total Viewers</h2>
          <p>{episodeDetails.totalViewers}</p>
      </div>
      <div><a href={episodeDetails.wikiUrl} target="_blank" rel="noopener noreferrer">Even More Details at the Wiki</a></div>

    </>
  )
}