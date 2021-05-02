import React from "react";

const WeatherCardForCurrentCity = ({ weatherProp, forecastProp }) => {
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
      {forecastProp.daily.map((day) => {
        const mms = parseInt(`${day.dt}000`);
        const date = new Date(mms).toString();
        return (
          <li>
            <p>day: {date}</p>
            <p>temperature: {day.temp.day}</p>
            <p>feels like: {day.feels_like.day}</p>
            <p>weather: {day.weather[0].description}</p>
            <p>wind speed: {day.wind_speed}</p>
          </li>
        );
      })}
    </>
  );
};

export default WeatherCardForCurrentCity;
