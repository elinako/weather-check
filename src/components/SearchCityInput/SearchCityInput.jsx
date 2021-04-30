import React, { useState, useEffect } from "react";
import { weatherAPIKey } from "../../helpers/APIkeys";
import { googleAPIKey } from "../../helpers/APIkeys";
import axios from "axios";

import WeatherCard from "../WeatherCard/WeatherCard";

const SearchCityInput = () => {
  const [city, setCityName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [coordinates, setCoordinates] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`
    ).then((response) => {
      setWeather(response.data);
      setIsSubmitted(true);
    });

    axios(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleAPIKey}`
    ).then((response) => {
      const coord = response.data.results[0].geometry.location;
      setCoordinates({ lat: String(coord.lat), lon: String(coord.lng) });
    });

    setCityName("");
  };

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=dayli&appid=${weatherAPIKey}`
      ).then((response) => {
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
