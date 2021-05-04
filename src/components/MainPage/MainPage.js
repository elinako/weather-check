import React, { useState, useEffect } from "react";
import SearchCityInput from "../SearchCityInput/SearchCityInput";
import {
  axiosCurrentCity,
  axiosForecast,
  axiosCurrentWeather,
} from "../../helpers/searchAPI";
import WeatherCardForCurrentCity from "../WeatherCardForCurrentCity/WeatherCardForCurrentCity.jsx";
import Loader from "../../helpers/loader/Loader";
import styles from "../MainPage/MainPageStyles.module.css";

const MainPage = () => {
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");
  const [loadedCurrent, setLoadingCurrentWeather] = useState(false);
  const [loadedForecast, setLoadingForecast] = useState(false);
  const [weather, setWeather] = useState({});
  const [cityFromLocation, setcityFromLocation] = useState("");
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = String(position.coords.latitude);
      const lon = String(position.coords.longitude);
      setLatitude(lat);
      setLongtitude(lon);
    });
  }, []);

  useEffect(() => {
    if (latitude && longtitude) {
      axiosCurrentCity(latitude, longtitude).then((response) => {
        setcityFromLocation(
          response.data.results[0].address_components[3].long_name
        );
      });

      const coordinates = { lat: latitude, lon: longtitude };
      axiosForecast(coordinates).then((response) => {
        setForecast(response.data);
        setLoadingForecast(true);
      });
    }
  }, [latitude, longtitude]);

  useEffect(() => {
    if (latitude && longtitude) {
      axiosCurrentWeather(latitude, longtitude).then((response) => {
        setWeather(response);
        setLoadingCurrentWeather(true);
      });
    }
  }, [latitude, longtitude]);

  return (
    <>
      <h2 className={styles.title}>
        Weather <span></span> Check
      </h2>

      {!cityFromLocation && (
        <p className={styles.locationNotific}>
          Please allow Your current location for correct forecast
        </p>
      )}
      {cityFromLocation && (
        <h3 className={styles.cityName}>
          Your current location: {cityFromLocation}
        </h3>
      )}

      {loadedCurrent && loadedForecast ? (
        <WeatherCardForCurrentCity
          className={styles.weatherCardCurrent}
          weatherProp={weather}
          forecastProp={forecast}
        />
      ) : (
        <Loader className={styles.loader} />
      )}

      <div className={styles.searchContainer}>
        <p>You can search for the weather in any city:</p>
        <SearchCityInput />
      </div>
    </>
  );
};

export default MainPage;
