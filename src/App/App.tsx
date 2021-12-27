import ReactWeather, { useOpenWeather } from "react-open-weather";

import "./App.css";

export const App = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "fe49102f8802f1d0da789007901a658c",
    lat: "44.958840",
    lon: "-93.136760",
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });

  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="St Paul"
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
