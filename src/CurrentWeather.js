import React from "react";

const CurrentWeather = ({ currentData }) => {
  if (!currentData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = currentData;

  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <div className="current-weather-details">
        <div className="current-weather-temp">{Math.round(main.temp)}°C</div>
        <div className="current-weather-description">
          {weather[0].description}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
