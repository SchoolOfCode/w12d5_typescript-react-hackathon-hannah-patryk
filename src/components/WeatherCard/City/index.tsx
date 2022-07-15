import "./city.css";

type Location = {
  cityName: string;
  country: string;
  lon: string;
  lat: string;
};

export default function City(location: Location) {
  return (
    <div className="city-box">
      <h2>{location.cityName}</h2>
      <p>{location.country}</p>
      <div className="long-lat">
        <p>{location.lon}</p> <p>{location.lat}</p>
      </div>
    </div>
  );
}
