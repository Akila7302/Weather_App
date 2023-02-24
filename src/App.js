import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./weather.css";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const API_KEY = "dd5d9ec9eaaaaec92bc20db8340348bd";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("Colombo");
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${API_KEY}`;
      const currentResponse = await axios.get(currentUrl);
      setCurrentData(currentResponse.data);
    };

    const fetchForecast = async () => {
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&units=metric&appid=${API_KEY}`;
      const forecastResponse = await axios.get(forecastUrl);
      setForecastData(forecastResponse.data);
    };

    fetchCurrentWeather();
    fetchForecast();
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
  };

  return (
    <Router>
      <div className="container">
        <h1>Weather App</h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {currentData && <CurrentWeather currentData={currentData} />}
                {forecastData && <Forecast forecastData={forecastData} />}
              </>
            }
          />
          <Route
            path="/forecast"
            element={<Forecast forecastData={forecastData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
