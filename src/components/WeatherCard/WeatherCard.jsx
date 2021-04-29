import React from "react";
import axios from "axios";

const WeatherCard = ({ weatherProp }) => {
  console.log("weatherProp", weatherProp);
  return (
    <>
      <p>Temperature: {weatherProp.main.temp}</p>
      <p>Feels like: {weatherProp.main.feels_like}</p>
      <p>Humidity: {weatherProp.main.humidity}</p>
      <p>Pressure: {weatherProp.main.pressure}</p>
    </>
  );
};

export default WeatherCard;
