import axios from "axios";
import { weatherAPIKey, googleAPIKey } from "./APIkeys";

const baseWeatherURL = "https://api.openweathermap.org";
const baseGeocoderURL = "https://maps.googleapis.com/maps/api/geocode";

const axiosCurrentWeather = (city) => {
  return axios
    .get(
      `${baseWeatherURL}/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`
    )
    .then((response) => response.data);
};

const axiosCurrentCity = (latitude, longtitude) => {
  return axios(
    `${baseGeocoderURL}/json?latlng=${latitude},${longtitude}&key=${googleAPIKey}`
  ).then((response) => response);
};

const axiosLatLonOfSearchCity = (city) => {
  return axios(
    `${baseGeocoderURL}/json?address=${city}&key=${googleAPIKey}`
  ).then((response) => response);
};

const axiosForecast = (coordinates) => {
  return axios(
    `${baseWeatherURL}/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=dayli&appid=${weatherAPIKey}`
  ).then((response) => response);
};

export {
  axiosCurrentWeather,
  axiosLatLonOfSearchCity,
  axiosForecast,
  axiosCurrentCity,
};
