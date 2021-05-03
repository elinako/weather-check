import React from "react";
import moment from "moment";
import styles from "../WeatherCardForCurrentCity/WeatherCurrentStyles.module.css";

const kelvinConstant = 273.15;

const WeatherCardForCurrentCity = ({ weatherProp, forecastProp }) => {
  return (
    <>
      <div className={styles.titleDiv}>
        <h3 className={styles.headTitle}>Weather for your current location:</h3>
        <p>{weatherProp.name}</p>
      </div>
      <div className={styles.currentCityWrapper}>
        <div className={styles.currentWeatherContainer}>
          <h2>Todays weather</h2>
          <p>Temperature: {Math.round(weatherProp.main.temp)} &deg;C</p>
          <p>Feels like: {Math.round(weatherProp.main.feels_like)} &deg;C</p>
          <p>Humidity: {weatherProp.main.humidity} %</p>
          <p>Pressure: {weatherProp.main.pressure} mb</p>
          <p>Description: {weatherProp.weather[0].description}</p>
        </div>

        <div className={styles.forecastWrapper}>
          <h4>Forecast</h4>
          <div className={styles.forecastContainer}>
            {forecastProp.daily.map((day) => {
              const date = moment(Number(`${day.dt}000`)).format("dddd D MMM");
              return (
                <li key={day.dt}>
                  <p>day: {date}</p>
                  <p>
                    temperature: {Math.round(day.temp.day - kelvinConstant)}{" "}
                    &deg;C
                  </p>
                  <p>
                    feels like:{" "}
                    {Math.round(day.feels_like.day - kelvinConstant)} &deg;C
                  </p>
                  <p>weather: {day.weather[0].description}</p>
                  <p>wind speed: {day.wind_speed} m/s</p>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCardForCurrentCity;
