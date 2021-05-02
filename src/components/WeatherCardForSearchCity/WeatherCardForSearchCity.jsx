import React from "react";

const WeatherCardForSearchCity = ({ weatherProp, forecastProp }) => {
  console.log("forecast", forecastProp);
  return (
    <>
      <h1>Weather for search city:</h1>
      <p>{weatherProp.name}</p>
      <h2>Todays weather</h2>
      <p>Temperature: {weatherProp.main.temp}</p>
      <p>Feels like: {weatherProp.main.feels_like}</p>
      <p>Humidity: {weatherProp.main.humidity}</p>
      <p>Pressure: {weatherProp.main.pressure}</p>
      <p>Description: {weatherProp.weather[0].description}</p>
    </>
  );
};

export default WeatherCardForSearchCity;
