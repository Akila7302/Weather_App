import React from "react";

const Forecast = ({ forecastData }) => {
  return (
    <div>
      {forecastData ? (
        <div>
          <h2>3-Day Forecast for {forecastData.city.name}</h2>
          {forecastData.list.slice(0, 3).map((item) => (
            <div key={item.dt}>
              <p>{item.dt_txt}</p>
              <p>Temperature: {item.main.temp}°C</p>
              <p>Weather: {item.weather[0].description}</p>
              <p>Wind speed: {item.wind.speed} m/s</p>
              <hr />
            </div>
          ))}
          {forecastData.list.length > 3 && (
            <p>
              For more detailed forecast, please click "View More" on the
              current weather page.
            </p>
          )}
        </div>
      ) : (
        <p>No forecast data to display.</p>
      )}
    </div>
  );
};

export default Forecast;
