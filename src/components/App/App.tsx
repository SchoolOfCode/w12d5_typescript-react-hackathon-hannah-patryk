import React, { useState } from "react";
import logo from "../../logo.svg";
import "./App.css";
import WeatherCard from "../WeatherCard";
import LocationButton from "../LocationButton";

function App() {
  const [location, setLocation] = useState("London,uk");
  const locationArr = ["London", "Paris", "New%20York", "Warsaw", "Sydney"];

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    setLocation(e.currentTarget.name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Very cool weather app</p>
      </header>
      <main>
        <div className="button-box">
          {locationArr.map(function (element) {
            return (
              <LocationButton
                handleClick={handleClick}
                locationName={element}
              />
            );
          })}
        </div>
        <WeatherCard location={location} />
      </main>
    </div>
  );
}

export default App;
