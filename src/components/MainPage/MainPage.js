import React, { useState, useEffect } from "react";
import axios from "axios";
import { googleAPIKey } from "../../helpers/APIkeys";
import SearchCityInput from "../SearchCityInput/SearchCityInput";

const LocationDetect = () => {
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");
  const [cityFromLocation, setcityFromLocation] = useState("");

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
      axios(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=${googleAPIKey}`
      ).then((response) => {
        setcityFromLocation(
          response.data.results[0].address_components[3].long_name
        );
      });
    }
  }, [latitude, longtitude]);

  return (
    <>
      <SearchCityInput />
    </>
  );
};

export default LocationDetect;
