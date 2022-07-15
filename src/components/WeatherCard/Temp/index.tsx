import "./temp.css";

export type TempProps = {
    min: number;
    max:  number;
    fl: number
}

export default function Temp(props: TempProps) {
	return (
		<section className="temperature-cont">
			<div className="temp-grid minimum-t">
				<p>Min:</p>
				<p id="min-temp">{props.min}</p>
			</div>
			<div className="temp-grid maximum-t">
				<p>Max:</p>
				<p id="max-temp">{props.max}</p>
			</div>
			<div className="temp-grid feelslike-t">
				<p>Feels like:</p>
				<p id="fl-temp">{props.fl}</p>
			</div>
		</section>
	);
}
