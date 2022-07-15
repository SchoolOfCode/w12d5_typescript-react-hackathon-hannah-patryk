import { log } from "console";
import { useEffect, useState } from "react";
import City from "./City";
import Description from "./Description";
import Temp from "./Temp";
import "./weathercard.css";
import type { Location } from "./City";

type Data = {
	[key: string]: any;
};

export default function WeatherCard(location: string) {
	const [data, setData] = useState<Data>(getWeather(location));

	const locationData: Location = {
		cityName: data.name,
		country: data.sys.country,
		lon: data.coord.lon,
		lat: data.coord.lat,
	};

	useEffect(() => {
		getWeather(location);
	}, [location]);

	async function getWeather(location: string) {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.APIKEY}`;
		const res = await fetch(url);
		const payload: Data = await res.json();
		console.log(payload);
		setData(payload);
		return payload;
	}

	return (
		<div className="WeatherCard">
			<City location={locationData} />
			<Temp />
			<Description />
		</div>
	);
}
