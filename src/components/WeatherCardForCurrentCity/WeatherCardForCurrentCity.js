import React from "react";

const WeatherCardForCurrentCity = ({ weatherProp, forecastProp }) => {
  console.log("forecast", forecastProp);
  return (
    <>
      <h2>Weather for your current city:</h2>
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

export default WeatherCardForCurrentCity;
