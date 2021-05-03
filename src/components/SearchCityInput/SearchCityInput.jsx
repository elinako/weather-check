import React, { useState, useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import {
  axiosCurrentWeather,
  axiosForecast,
  axiosLatLonOfSearchCity,
} from "../../helpers/searchAPI";

import WeatherCardForSearchCity from "../WeatherCardForSearchCity/WeatherCardForSearchCity";
import notification from "../../helpers/notification";
import "react-notifications/lib/notifications.css";

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

    axiosCurrentWeather(city)
      .then((response) => {
        setWeather(response);
        setLoadingCurrentWeather(true);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          notification({
            type: "error",
            message: "enter proper name of the city",
          });
        }
      });

    axiosLatLonOfSearchCity(city).then((response) => {
      const coord = response.data.results[0].geometry.location;
      setCoordinates({ lat: String(coord.lat), lon: String(coord.lng) });
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your city"
          value={city}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button>ok</button>
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
            <p>Loading...</p>
          )}
        </>
      )}
      <NotificationContainer />
    </>
  );
};

export default SearchCityInput;
