import React from 'react';
import BoDChalkboard from './Components/BoDChalkboard/BoDChalkboard';
import CharacterTrivia from './Components/BoDChalkboard/CharacterTrivia/CharacterTrivia';

function App() {
    return (
        <div className="App">
            <h1>Welcome to Bob's Burgers Web App!</h1>
            <BoDChalkboard />
            <CharacterTrivia />
        </div>
    );
}

export default App;