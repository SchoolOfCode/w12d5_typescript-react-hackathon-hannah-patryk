import "./city.css";

export type Location = {
  cityName: string;
  country: string;
  lon: number;
  lat: number;
};

export default function City(props: any) {
  return (
    <div className="city-box">
      <h2 className="city-name">{props.location.cityName}</h2>
      <p>{props.location.country}</p>
      <div className="long-lat">
        <p>
          <span className="lonlat-label">Longitude: </span>
          {props.location.lon}
        </p>{" "}
        <p>
          <span className="lonlat-label">Latitude: </span>
          {props.location.lat}
        </p>
      </div>
    </div>
  );
}
