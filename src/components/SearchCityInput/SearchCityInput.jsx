import React, { useState, useEffect } from "react";
import {
  axiosCurrentWeather,
  axiosForecast,
  axiosLatLonOfSearchCity,
} from "../../helpers/searchAPI";

import WeatherCard from "../WeatherCard/WeatherCard";

const SearchCityInput = () => {
  const [city, setCityName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [coordinates, setCoordinates] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosCurrentWeather(city).then((response) => {
      setWeather(response);
      setIsSubmitted(true);
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
        <WeatherCard weatherProp={weather} forecastProp={forecast} />
      )}
    </>
  );
};

export default SearchCityInput;
