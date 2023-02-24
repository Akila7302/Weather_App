import React, { useState, useEffect } from "react";
import axios from "axios";
import "../weather.css";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import SevenDayForecast from "../components/SevenDayForecast";

const API_KEY = "dd5d9ec9eaaaaec92bc20db8340348bd";

const Dashboard = ({ handleLogout }) => {
  const [searchTerm, setSearchTerm] = useState("Colombo");
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [forecast7dayData, setForecast7dayData] = useState(null);

  // Get current weather details
  const fetchCurrentWeather = async () => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${API_KEY}`;
    const currentResponse = await axios.get(currentUrl);
    setCurrentData(currentResponse.data);
  };

  // Get 3 day forecast
  const fetchForecast = async () => {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&cnt=24&units=metric&appid=${API_KEY}`;
    const forecastResponse = await axios.get(forecastUrl);
    setForecastData(forecastResponse.data);
  };

  // Get 7 day forecast
  const fetch7dayForecast = async () => {
    const forecast7dayUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchTerm}&cnt=7&units=metric&appid=${API_KEY}`;
    const forecast7dayResponse = await axios.get(forecast7dayUrl);
    setForecast7dayData(forecast7dayResponse.data);
  };

  useEffect(() => {
    fetchCurrentWeather();
    fetchForecast();
    fetch7dayForecast();
  }, []);

  const handleSearch = () => {
    setSearchTerm(searchTerm.trim());
    fetchCurrentWeather();
    fetchForecast();
    fetch7dayForecast();
  };

  const handleViewMore = () => {
    fetch7dayForecast();
  };

  return (
    <div className="container">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {currentData && <CurrentWeather currentData={currentData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
      <button className="seven-day-button" onClick={handleViewMore}>
        View More
      </button>
      {forecast7dayData && <SevenDayForecast forecastData={forecast7dayData} />}
    </div>
  );
};

export default Dashboard;
