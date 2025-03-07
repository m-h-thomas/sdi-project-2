import React, { useEffect, useRef } from 'react';
import './LofiBobs.css';  

const LofiBobs = () => {
  const rainContainerRef = useRef(null);

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
  }, []);

  return (
    <div className="full-screen-container">
      <div className="logo">
        <b className="bobs">B<span>O</span>B'S</b>
        <b className="burgers"><span>&nbsp; B</span>URGERS</b>
      </div>
      <section className="rain" ref={rainContainerRef}></section>
      <img className="umbrella" src="images/umbrella.png" alt="Umbrella" />
      <audio loop autoPlay>
        <source src="/Chill/sounds/BobsBurgersLofi.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default LofiBobs;
