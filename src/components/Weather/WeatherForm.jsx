import classes from "./WeatherForm.module.scss";

function WeatherForm({ getWeather, setCity, city, setData }) {
  return (
    <>
      <h1 className={classes.heading}>Be prepared for the weather</h1>
      <form className={classes.weather_form} onSubmit={getWeather}>
        <field>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
        </field>
        <field className={classes.weather_form_buttons}>
          <button type="submit">Get Weather</button>
          <button type="button" onClick={() => setCity("")}>
            Clear
          </button>
          <button type="button" onClick={() => setData(null)}>
            Reset
          </button>
        </field>
      </form>
    </>
  );
}

export default WeatherForm;
