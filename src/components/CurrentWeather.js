import React from "react";
import "../weather.css";

const CurrentWeather = ({ currentData }) => {
  if (!currentData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = currentData;

  const iconId = weather[0].icon;

  const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;

  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <div className="current-weather-details">
        <img src={iconUrl} alt={weather[0].description} />
        <div className="current-weather-temp">{Math.round(main.temp)}°C</div>
        <div className="current-weather-description">
          {weather[0].description}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
