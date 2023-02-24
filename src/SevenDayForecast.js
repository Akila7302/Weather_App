import React from "react";

const SevenDayForecast = ({ forecastData }) => {
  const { daily } = forecastData;

  return (
    <div>
      <h2>7-Day Forecast</h2>
      <div className="forecast-container">
        {daily.map((day, index) => (
          <div className="forecast-item" key={index}>
            <h3>{new Date(day.dt * 1000).toLocaleDateString()}</h3>
            <img
              src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <div className="temperature">
              <span className="high">{Math.round(day.temp.max)}°C</span>
              <span className="low">{Math.round(day.temp.min)}°C</span>
            </div>
            <div className="description">{day.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDayForecast;
