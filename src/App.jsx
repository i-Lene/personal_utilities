import { useState } from "react";
import "./App.scss";
import WeatherForm from "./components/Weather/WeatherForm";
import WeatherResult from "./components/Weather/WeatherResult";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "b6a3a386580da746398df2add8c3c39d";

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

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

  console.log(data);

  return (
    <>
      <WeatherForm
        getWeather={getWeather}
        setCity={setCity}
        city={city}
        setData={setData}
      />
      <WeatherResult data={data} />
    </>
  );
}

export default App;
