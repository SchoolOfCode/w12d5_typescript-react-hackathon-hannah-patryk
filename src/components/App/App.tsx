import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "../WeatherCard";

function App() {
	const [location, setLocation] = useState("London,uk");

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Very cool weather app</p>
			</header>
			<main>
				<WeatherCard location={location} />
			</main>
		</div>
	);
}

export default App;
