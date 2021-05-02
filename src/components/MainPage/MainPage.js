import React, { useState, useEffect } from "react";
import SearchCityInput from "../SearchCityInput/SearchCityInput";
import {
  axiosCurrentCity,
  axiosForecast,
  axiosCurrentWeather,
} from "../../helpers/searchAPI";
import WeatherCardForCurrentCity from "../WeatherCardForCurrentCity/WeatherCardForCurrentCity";

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
    if (cityFromLocation) {
      axiosCurrentWeather(cityFromLocation).then((response) => {
        setWeather(response);
        setLoadingCurrentWeather(true);
      });
    }
  }, [cityFromLocation]);

  // console.log("weatherCurrent", weather);
  // console.log("forec!!!!", forecast);

  return (
    <>
      <p>Your current city: {cityFromLocation}</p>
      <SearchCityInput />
      {loadedCurrent && loadedForecast ? (
        <WeatherCardForCurrentCity
          weatherProp={weather}
          forecastProp={forecast}
        />
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default MainPage;
