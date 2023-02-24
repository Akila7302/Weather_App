import React from "react";
import "./weather.css";

const Forecast = ({ forecastData }) => {
  const forecastList = forecastData.list.slice(0, 3).map((item) => (
    <div className="forecast-box" key={item.dt}>
      <p className="forecast-date">{item.dt_txt}</p>
      <img
        className="forecast-icon"
        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
        alt={item.weather[0].description}
      />
      <p className="forecast-temp">{item.main.temp}°C</p>
      <p className="forecast-desc">{item.weather[0].description}</p>
      <p className="forecast-wind">{item.wind.speed} m/s</p>
    </div>
  ));

  return (
    <div className="forecast-container">
      {forecastData ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            3-Day Forecast for {forecastData.city.name}
          </h1>
          <div className="forecast-grid">{forecastList}</div>
          {forecastData.list.length > 3 && (
            <p>For more detailed forecast, please click Below</p>
          )}
        </div>
      ) : (
        <p>No forecast data to display.</p>
      )}
    </div>
  );
};

export default Forecast;
