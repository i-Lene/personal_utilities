import classes from "./WeatherResult.module.scss";

function WeatherResult({ data }) {
  if (!data) return null;

  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = data;

  const { icon, description } = weather[0];

  return (
    <div className={classes.weather_result}>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={name} />
      <div className={classes.weather_info}>
        <h2 className={classes.weather_name}>{name}</h2>
        <p className={classes.weather_temp}>{Math.round(temp)}°C</p>
        <p className={classes.weather_description}>{description}</p>
        <p className={classes.weather_humidity}>
          <strong>Humidity:</strong> {humidity}%
        </p>
        <p className={classes.weather_wind}>
          <strong>Wind Speed:</strong> {speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherResult;
