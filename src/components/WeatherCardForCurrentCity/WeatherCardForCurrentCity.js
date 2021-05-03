import React from "react";
import moment from "moment";

const kelvinConstant = 273.15;

const WeatherCardForCurrentCity = ({ weatherProp, forecastProp }) => {
  return (
    <>
      <h2>Weather for your current location:</h2>
      <p>{weatherProp.name}</p>
      <h2>Todays weather</h2>
      <p>Temperature: {Math.round(weatherProp.main.temp)} &deg;C</p>
      <p>Feels like: {Math.round(weatherProp.main.feels_like)} &deg;C</p>
      <p>Humidity: {weatherProp.main.humidity} %</p>
      <p>Pressure: {weatherProp.main.pressure} mb</p>
      <p>Description: {weatherProp.weather[0].description}</p>
      <h1>Forecast</h1>
      {forecastProp.daily.map((day) => {
        const date = moment(Number(`${day.dt}000`)).format("dddd D MMM");
        return (
          <li key={day.dt}>
            <p>day: {date}</p>
            <p>
              temperature: {Math.round(day.temp.day - kelvinConstant)} &deg;C
            </p>
            <p>
              feels like: {Math.round(day.feels_like.day - kelvinConstant)}{" "}
              &deg;C
            </p>
            <p>weather: {day.weather[0].description}</p>
            <p>wind speed: {day.wind_speed} m/s</p>
          </li>
        );
      })}
    </>
  );
};

export default WeatherCardForCurrentCity;
