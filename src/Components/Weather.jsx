import React, { useState, useEffect } from "react";
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New Delhi');
  const [inputCity, setInputCity] = useState('');

  // API Call
  const search = async (city) => {
    try {
      const apiKey = '4d0999e050b7dc5e1a8fd31e88b82f83';
      const callApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(callApi);
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
      } else {
        window.alert(`Oops: ${data.message}. Please enter a valid city name.`);
      }
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      
    }
  };

  useEffect(() => {
    search(city);
  }, [city]);

  const handleSearch = () => {
    if (inputCity) {
      setCity(inputCity);
    }
  };

  return (
    <div className='weather'>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder='Search' 
          value={inputCity} 
          onChange={(e) => setInputCity(e.target.value)} 
        />
        <img 
          src={search_icon} 
          alt="Search Icon" 
          onClick={handleSearch} 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {weatherData && (
        <>
          <img src={clear_icon} alt="Weather Icon" className="weather-icon" />
          <p className="temperature">{Math.floor(weatherData.main.temp)}°C</p> {/* Using Math.floor for temperature */}
          <p className="location">{weatherData.name}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity Icon" />
              <p>{weatherData.main.humidity}%</p>
              <span>Humidity</span>
            </div>

            <div className="col">
              <img src={wind_icon} alt="Wind Icon" />
              <p>{weatherData.wind.speed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;


