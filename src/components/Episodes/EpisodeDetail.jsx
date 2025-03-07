import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './EpisodeDetail.css'


const baseURL = "https://bobsburgers-api.herokuapp.com";

export default function EpisodeDetail () {

  const [ episodeDetails, setEpisodeDetails ] = useState([])
  const [ pestControl, setPestControl ] = useState(null);
  const [ burgerOfTheDay, setBurgerOfTheDay ] = useState(null);
  const [ storeNextDoor, setStoreNextDoor ] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    fetch(`${baseURL}/episodes/${id}`)
      .then(res => res.json())
      .then(data => setEpisodeDetails(data))
  }, [id])

  useEffect(() => {
    fetch(`${baseURL}/pestControlTruck/${id}`)
      .then(res => res.json())
      .then(data => setPestControl(data))
  }, [id])

  useEffect(() => {
    fetch(`${baseURL}/storeNextDoor/${id}`)
      .then(res => res.json())
      .then(data => setStoreNextDoor(data))
  }, [id])

  useEffect(() => {
    fetch(`${baseURL}/burgerOfTheDay/${id}`)
      .then(res => res.json())
      .then(data => setBurgerOfTheDay(data))
  }, [id])


  return (
    <>
      <div className="detail-body">
            <div className="detail-container">

                <div className="episode-detail-container">
                  <div className="episode-detail-text" onClick={() => window.open(episodeDetails.wikiUrl)}>
                    {setEpisodeDetails && (
                      <div className="episode-detail-box">
                        <p>
                          <strong>{episodeDetails.name}</strong>
                        </p>
                        <p>
                          {episodeDetails.description}
                        </p>
                        <br></br>
                        <p>
                          <em>Aired:</em> {episodeDetails.airDate}
                        </p>
                        <p>
                          <em>Total Viewers:</em> {episodeDetails.totalViewers}
                        </p>
                      </div>
                    )}

                    {burgerOfTheDay && (
                      <div className="episode-detail-section-burger">
                        <p>
                          <strong>🍔 Burger of The Day:</strong> {burgerOfTheDay.name}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="detail-images">
                    {pestControl && (
                      <div className="episode-detail-section-pest">
                        <p>
                          <strong>Pest Control:</strong>
                        </p>
                        {pestControl.image && (
                          <img src={pestControl.image} alt="Pest Control" />
                        )}
                      </div>
                    )}

                    {storeNextDoor && (
                      <div className="episode-detail-section-store">
                        <p>
                          <strong>Store Next Door:</strong>
                        </p>
                        {storeNextDoor.image && (
                          <img src={storeNextDoor.image} alt="Store Next Door" />
                        )}
                      </div>
                    )}
                  </div>

                </div>

            </div>

      </div>
    </>

  )
}