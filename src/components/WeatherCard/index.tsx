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

type WeatherProps = { location: string };

let locationData: Location = {
  cityName: "",
  country: "",
  lon: 0,
  lat: 0,
};

export default function WeatherCard({ location }: WeatherProps) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    async function fetchData() {
      getWeather(location);
    }
    fetchData();
  }, [location]);

  async function getWeather(location: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_APIKEY}`;
    const res = await fetch(url);
    const payload: Data = await res.json();
    console.log(payload);
    setData(payload);
    setLocationData(payload);
    return payload;
  }

  function setLocationData(data: Data) {
    locationData = {
      cityName: data.name,
      country: data.sys.country,
      lon: data.coord.lon,
      lat: data.coord.lat,
    };
    return locationData;
  }

  if (data) {
    return (
      <div className="WeatherCard">
        <City location={locationData} />
        <Temp
          min={data.main.temp_min}
          max={data.main.temp_max}
          fl={data.main.feels_like}
        />
        <Description
          cat={data.weather[0].main}
          subcat={data.weather[0].description}
          icon={data.weather[0].icon}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>Choose your city</p>
      </div>
    );
  }
}
