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
			<h2>{props.location.cityName}</h2>
			<p>{props.location.country}</p>
			<div className="long-lat">
				<p>{props.location.lon}</p> <p>{props.location.lat}</p>
			</div>
		</div>
	);
}
