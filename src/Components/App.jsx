import React from 'react';
import BoDChalkboard from './BoDChalkboard/BoDChalkboard';
import './BoDChalkboard/BoDChalkboard.css';
import burgerButton from './BoDChalkboard/images/burger-button.png';



function App() {
  return (
    <div className="App">
      <h1>Welcome to Bob's Burgers Web App!</h1>
      <BoDChalkboard />  {/* Display the BoDChalkboard here */}
    </div>
  );
}

export default App;