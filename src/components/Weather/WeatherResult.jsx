import classes from "./WeatherResult.module.scss";

function WeatherResult({ data }) {
  return (
    data &&
    <div className={classes.weather_result}>
      <img
        src={
          data?.weather
            ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            : ""
        }
        alt={data?.name ?? ""}
      />
      <div className={classes.weather_info}>
        <h2 className={classes.weather_name}>{data?.name ?? ""}</h2>
        <p className={classes.weather_temp}>
          {data ? Math.round(data.main.temp) + "°C" : ""}
        </p>
        <p className={classes.weather_description}>
          {data ? data.weather[0].description : ""}
        </p>
        <p className={classes.weather_humidity}>
          {data ? "Humidity: " + data.main.humidity + "%" : ""}
        </p>
        <p className={classes.weather_wind}>
          {data ? "Wind Speed: " + data.wind.speed + " m/s" : ""}
        </p>
      </div>
    </div>
  );
}

export default WeatherResult;
