import React, { useState, useEffect, useRef } from 'react';
import './BoDChalkboard.css';
import burgerButton from './images/burger-button.png';  // Import burger icon
import chalkSound from '../../sounds/chalk-sound.mp3';

const BoDChalkboard = () => {
    const [burger, setBurger] = useState(null);
    const [loading, setLoading] = useState(true);  // Start loading initially
    const textRef = useRef(null);  // Ref for text
    const soundRef = useRef(null);  // Ref for sound

    // Fetch Random Burger Function
    const fetchBurger = async () => {
        setLoading(true);  // Start loading
        try {
            const response = await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/');
            const data = await response.json();
            const randomBurger = data[Math.floor(Math.random() * data.length)];
            
            if (!randomBurger.name) {
                randomBurger.name = "Mystery Burger";  // Set a default name for unnamed burger
            }
                
            setBurger(randomBurger);
        } catch (error) {
            console.error('Error fetching Burger of the Day:', error);
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    // Auto-fetch a burger when the page loads
    useEffect(() => {
        fetchBurger();  // Fetch a random burger when the component mounts
    }, []);

    // Type out text word by word (cleaned up)
    useEffect(() => {
        if (burger && textRef.current) {
            const nameText = burger?.name ? `${burger.name}\n` : '';
            const priceText = burger?.price && burger?.price !== 'undefined' ? `${burger.price}` : '';
            const fullText = `${nameText}${priceText}`.trim();

            const words = fullText.split(' ');
            let currentWordIndex = 0;
            textRef.current.textContent = '';  // Clear text before typing

            //Start sound playback when typing begins
            if (soundRef.current) {
                soundRef.current.currentTime = 0;  // Rewind to start
                soundRef.current.play();
            }

            const typeWord = () => {
                if (currentWordIndex < words.length) {
                    textRef.current.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    setTimeout(typeWord, 300);  // Delay between words
                } else {
                    // Stop sound playback when typing is complete
                    if (soundRef.current) {
                        soundRef.current.pause();
                        soundRef.current.currentTime = 0;  // Reset sound to start
                    }
                }
            };

            typeWord();
        }
    }, [burger]);

    return (
        <div className="chalkboard">
            <h2 className="bod-header">BURGER OF THE DAY</h2>
            <div className="chalk-text">
                {loading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <p ref={textRef} className="chalk-animation"></p>
                )}
            </div>

            {/* Burger Icon to Fetch a New Random Burger (Easter Egg) */}
            <div className="burger-icon" onClick={fetchBurger}>
                <img src={burgerButton} alt="Burger Icon" style={{ width: '40px', cursor: 'pointer' }} />
            </div>

            {/* Hidden Audio Element for Chalk Sound */}
            <audio ref={soundRef} src={chalkSound} style={{ display: 'none' }} />
        </div>
    );
};

export default BoDChalkboard;