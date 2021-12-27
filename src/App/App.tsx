import { useEffect, useState } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

import "./App.css";

const positionStackApiKey = "4803913471c42c746d7dece907fb4994";

export const App = () => {
  const [lat, setLat] = useState("44.958840");
  const [lon, setLon] = useState("-93.261240");

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "fe49102f8802f1d0da789007901a658c",
    lat,
    lon,
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });

  const [locationLabel, setLocationLabel] = useState("St. Paul");
  useEffect(() => {
    fetch(
      `http://api.positionstack.com/v1/reverse?access_key=${positionStackApiKey}&query=${lat},${lon}`
    )
      .then((response) => response.json())
      .then((response) => {
        const {
          region,
          country_code: countryCode,
          label: resultLabel,
        } = response.data[0];
        const label =
          region && countryCode ? `${region}, ${countryCode}` : resultLabel;

        setLocationLabel(label);
      });
  }, [lat, lon]);

  return (
    <div className="App">
      <div>
        <label htmlFor="lat">Latitude:</label>
        <input
          id="lat"
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        <label htmlFor="lon">Longitude:</label>
        <input
          id="lon"
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </div>

      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={locationLabel}
        unitsLabels={{ temperature: "F", windSpeed: "M/h" }}
        showForecast
      />

      <div>
        We are using Node.js <span id="node-version"></span>, Chromium{" "}
        <span id="chrome-version"></span>, and Electron{" "}
        <span id="electron-version"></span>
      </div>
    </div>
  );
};
