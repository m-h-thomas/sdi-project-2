import React, { useEffect, useRef } from 'react';
import './LofiBobs.css'; 
import Lofi from '../../sounds/BobsBurgersLofi.mp3';
// import umbrella from '../public/images/umbrella.png';

const LofiBobs = () => {
  const rainContainerRef = useRef(null);
  const audioRef = useRef(null); // Create a ref to control the audio

  useEffect(() => {
    let hrElement;
    let counter = 30;
    for (let i = 0; i < counter; i++) {
      hrElement = document.createElement('HR');
      if (i === counter - 1) {
        hrElement.className = 'thunder';
      } else {
        hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + 's';
        hrElement.style.animationDelay = Math.random() * 5 + 's';
      }
      rainContainerRef.current.appendChild(hrElement);
    }

    // Play the audio as soon as the component is mounted
    audioRef.current.play();

  }, []);

  return (
    <div className="full-screen-container">
      <div className="logo">
        <b className="bobs">B<span>O</span>B'S</b>
        <b className="burgers"><span>&nbsp; B</span>URGERS</b>
      </div>
      <section className="rain" ref={rainContainerRef}></section>
      
      <img className="umbrella" src='/images/umbrella.png' alt="Umbrella" />

      {/* Use ref here to control the audio */}
      <audio ref={audioRef} loop>
        <source src={Lofi} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LofiBobs;


