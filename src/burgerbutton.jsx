import { useState } from "react";
import "./App.css";

function BurgerButton() {
  const [burger, setBurger] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchBurger() {
    setLoading(true);
    try {
      const response = await fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/");
      const burgers = await response.json();

      if (burgers.length > 0) {
        const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
        setBurger(randomBurger);
      } else {
        setBurger({ name: "No burgers available today!", price: "N/A" });
      }
    } catch (error) {
      setBurger({ name: "Error fetching burger. Try again!", price: "N/A" });
    }
    setLoading(false);
  }

  return (
    <div className="app">
      <button className="burger-button" onClick={fetchBurger}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/174/585/non_2x/cheese-burger-cartoon-vector.jpg" 
          alt="Burger Button"
          className="burger-image"
        />
      </button>

      {burger && 
      <p className="burger-text"> {burger.name} = {burger.price}</p>
      }
    </div>
  );
}

export default BurgerButton;
