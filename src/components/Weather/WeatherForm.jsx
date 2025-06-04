import classes from "./WeatherForm.module.scss";
import weatherImg from "/images/weather_app.png";
function WeatherForm({ getWeather, setCity, city, setData, setError }) {
  return (
    <>
      <div className={classes.weather_img}>
        <img src={weatherImg} alt="Weather App" />
      </div>
      <h1 className={classes.heading}>Be prepared for the weather !</h1>
      <form className={classes.weather_form} onSubmit={getWeather}>
        <div className={classes.field}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
        </div>
        <div className={classes.weather_form_buttons}>
          <button type="submit">Get Weather</button>
          <button
            type="button"
            onClick={() => {
              setCity("");
              setError(null);
            }}
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => {
              setData(null);
              setError(null);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default WeatherForm;
