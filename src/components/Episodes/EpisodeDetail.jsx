import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Home/Home.css'
import '../Home/MainEpisodeDisplay.css'

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
      <div className="home-body">
            <div className="main-container">

                <div className="episode-container">
                  <div className="episode-text" onClick={() => window.open(episodeDetails.wikiUrl)}>
                    {setEpisodeDetails && (
                      <div className="episode-box">
                        <p>
                          <strong>{episodeDetails.name}</strong>
                        </p>
                        <p>
                          <em>Aired:</em> {episodeDetails.airDate}
                        </p>
                      </div>
                    )}

                    {burgerOfTheDay && (
                      <div className="episode-section-burger">
                        <p>
                          <strong>🍔 Burger of The Day:</strong> {burgerOfTheDay.name}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="images">
                    {pestControl && (
                      <div className="episode-section-pest">
                        <p>
                          <strong>Pest Control:</strong>
                        </p>
                        {pestControl.image && (
                          <img src={pestControl.image} alt="Pest Control" />
                        )}
                      </div>
                    )}

                    {storeNextDoor && (
                      <div className="episode-section-store">
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