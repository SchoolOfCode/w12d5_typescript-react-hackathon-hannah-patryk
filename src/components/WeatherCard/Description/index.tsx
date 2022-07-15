import "./description.css";

export type DescProps = {
  cat: string;
  subcat: string;
  icon: string;
};

export default function Description(props: DescProps) {
  const imgUrl = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <section id="weather-desc">
      <div id="weather-cat">
        <h3 id="main-cat-wth">{props.cat}</h3>
        <p id="sub-cat-wth">
          {props.subcat[0].toUpperCase() +
            props.subcat.slice(-props.subcat.length + 1)}
        </p>
      </div>
      <div id="img-container">
        <img
          src={imgUrl}
          id="weather-icon"
          alt={`Stylised icon of ${props.cat.toLowerCase()} weather type`}
        />
      </div>
    </section>
  );
}
