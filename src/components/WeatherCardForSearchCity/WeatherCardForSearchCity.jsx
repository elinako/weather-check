import React from "react";
import moment from "moment";
import styles from "../WeatherCardForSearchCity/WeatherSearchCityStyles.module.css";

const kelvinConstant = 273.15;

const WeatherCardForSearchCity = ({ weatherProp, forecastProp }) => {
  return (
    <>
      <div className={styles.titleSearchDiv}>
        <p className={styles.headSearchTitle}>
          Weather for search city:
          <span className={styles.localSearchName}>{weatherProp.name}</span>
        </p>
      </div>
      <div className={styles.searchCityWrapper}>
        <div className={styles.searchCityContainer}>
          <h2 className={styles.titleSection}>Todays weather</h2>
          <p>
            Temperature:{" "}
            <span className={styles.digits}>
              {Math.round(weatherProp.main.temp)} &deg;C
            </span>
          </p>
          <p>
            Feels like:{" "}
            <span className={styles.digits}>
              {Math.round(weatherProp.main.feels_like)} &deg;C
            </span>
          </p>
          <p>
            Humidity:
            <span className={styles.digits}>
              {" "}
              {weatherProp.main.humidity} %
            </span>
          </p>
          <p>
            Pressure:
            <span className={styles.digits}>
              {" "}
              {weatherProp.main.pressure} mb
            </span>
          </p>
          <p>
            Description:
            <span className={styles.digits}>
              {" "}
              {weatherProp.weather[0].description}
            </span>
          </p>
        </div>

        <div className={styles.forecastWrapper}>
          <h2 className={styles.titleSection}>Forecast</h2>
          <div className={styles.forecastContainer}>
            {forecastProp.daily.map((day) => {
              const date = moment(Number(`${day.dt}000`)).format("dddd D MMM");
              return (
                <li key={day.dt}>
                  <span className={styles.dayName}>{date}</span>
                  <p>
                    temperature:{" "}
                    <span className={styles.digits}>
                      {Math.round(day.temp.day - kelvinConstant)} &deg;C
                    </span>
                  </p>
                  <p>
                    feels like:{" "}
                    <span className={styles.digits}>
                      {Math.round(day.feels_like.day - kelvinConstant)} &deg;C
                    </span>
                  </p>
                  <p>
                    weather:
                    <span className={styles.digitsWeather}>
                      {" "}
                      {day.weather[0].description}
                    </span>
                  </p>
                  <p>
                    wind speed:
                    <span className={styles.digits}> {day.wind_speed} m/s</span>
                  </p>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footer}>apr 2021</div>
    </>
  );
};

export default WeatherCardForSearchCity;
