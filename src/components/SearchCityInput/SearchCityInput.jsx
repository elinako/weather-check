import React, { useState, useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import {
  axiosCurrentWeatherByCityName,
  axiosForecast,
  axiosLatLonOfSearchCity,
} from "../../helpers/searchAPI";

import WeatherCardForSearchCity from "../WeatherCardForSearchCity/WeatherCardForSearchCity";
import notification from "../../helpers/notification";
import Loader from "../../helpers/loader/Loader";
import styles from "../SearchCityInput/SearchCityStyles.module.css";

const SearchCityInput = () => {
  const [city, setCityName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loadedCurrent, setLoadingCurrentWeather] = useState(false);
  const [loadedForecast, setLoadingForecast] = useState(false);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [coordinates, setCoordinates] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    axiosCurrentWeatherByCityName(city)
      .then((response) => {
        axiosLatLonOfSearchCity(city).then((response) => {
          const coord = response.data.results[0].geometry.location;
          setCoordinates({ lat: String(coord.lat), lon: String(coord.lng) });
        });
        setWeather(response.data);
        setLoadingCurrentWeather(true);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 404:
            notification({
              type: "warning",
              message: "enter proper name of the city",
            });
            break;

          case 400:
            notification({
              type: "warning",
              message: "enter the name of the city",
            });
            break;

          default:
            return;
        }
      });

    setCityName("");
  };

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      axiosForecast(coordinates).then((response) => {
        setForecast(response.data);
        setLoadingForecast(true);
      });
    }
  }, [coordinates]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="please enter city name"
          value={city}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button className={styles.submitButton}>OK</button>
      </form>

      {isSubmitted && (
        <>
          {loadedCurrent && loadedForecast ? (
            <>
              <WeatherCardForSearchCity
                weatherProp={weather}
                forecastProp={forecast}
              />
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
      <NotificationContainer />
    </>
  );
};

export default SearchCityInput;
