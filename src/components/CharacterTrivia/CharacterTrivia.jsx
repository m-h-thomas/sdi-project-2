import React, { useState } from "react";
import "./CharacterTrivia.css";

const CharacterTrivia = () => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCharacterTrivia = async () => {
        setLoading(true);
        try {
            const randomId = Math.floor(Math.random() * 496) + 1;
            const response = await fetch(`https://bobsburgers-api.herokuapp.com/characters/${randomId}`);
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            console.error("Error fetching character trivia:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="character-trivia-container">
            <h2>Bob's Burgers Character Trivia</h2>
            {character && (
                <div>
                    <img src={character.image} alt={character.name} style={{ borderRadius: "10px", maxWidth: "100%" }} />
                    <p className="trivia-text">Name: {character.name}</p>
                    <p className="trivia-text">First Episode: {character.firstEpisode}</p>
                    <p className="trivia-text">Occupation: {character.occupation}</p>
                </div>
            )}
            <button className="trivia-button" onClick={fetchCharacterTrivia} disabled={loading}>
                {loading ? "Loading..." : "Get Random Character Trivia"}
            </button>
        </div>
    );
};

export default CharacterTrivia;
