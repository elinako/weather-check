import React, { useState, useEffect } from "react";
import { weatherAPIKey } from "../../helpers/APIkeys";
import axios from "axios";

import WeatherCard from "../WeatherCard/WeatherCard";

const SearchCityInput = () => {
  const [city, setCityName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weather, setWeather] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`
    ).then((response) => {
      setWeather(response.data);
      setIsSubmitted(true);
    });
  };

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
      {isSubmitted && <p>{city}</p>}
      {isSubmitted && <WeatherCard weatherProp={weather} />}
    </>
  );
};

export default SearchCityInput;
