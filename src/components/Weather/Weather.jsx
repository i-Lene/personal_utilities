import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import { addClassToBody } from "../../utils/utils_funcs";

function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const cleanup = addClassToBody("weather_page");
    return () => {
      cleanup && cleanup();
    };
  }, []);

  const getWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();
      if (!geoData || geoData.length === 0) {
        throw new Error("City not found");
      }
      const { lat, lon } = geoData[0];

      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const weatherData = await weatherRes.json();
      setData(weatherData);
    } catch (error) {
      setData(null);
      console.error(error);
    }
  };
  return (
    <>
      <WeatherForm
        getWeather={getWeather}
        setCity={setCity}
        city={city}
        setData={setData}
        setError={setError}
      />
      {!data && error && (
        <p className="error">Enter a city to get the weather</p>
      )}
      <WeatherResult data={data} />
    </>
  );
}

export default Weather;
