import React, { useState, useEffect } from "react";
import SearchCityInput from "../SearchCityInput/SearchCityInput";
import { axiosCurrentCity, axiosForecast } from "../../helpers/searchAPI";

const MainPage = () => {
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");
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
      });
    }
  }, [latitude, longtitude]);

  console.log("loooocat", latitude, longtitude);
  console.log("forec!!!!", forecast);

  return (
    <>
      <SearchCityInput />
    </>
  );
};

export default MainPage;
