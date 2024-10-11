import React from "react";
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="Search Icon" />
      </div>
      
      <img src={clear_icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">16°C </p>
      <p className="location">London</p>
      
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="Humidity Icon" />
          <p>91%</p>
          <span>Humidity</span>
        </div>
        
        <div className="col">
          <img src={wind_icon} alt="Wind Icon" />
          <p>3.6 km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;

