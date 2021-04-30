import React from "react";

const WeatherCard = ({ weatherProp, forecastProp }) => {
  console.log("forecast", forecastProp);
  return (
    <>
      <p>Weather for city:</p>
      <p>{weatherProp.name}</p>
      <p>Temperature: {weatherProp.main.temp}</p>
      <p>Feels like: {weatherProp.main.feels_like}</p>
      <p>Humidity: {weatherProp.main.humidity}</p>
      <p>Pressure: {weatherProp.main.pressure}</p>
      <p>Description: {weatherProp.weather[0].description}</p>
    </>
  );
};

export default WeatherCard;
