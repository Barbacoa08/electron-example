import ReactWeather, {useOpenWeather} from "react-open-weather";

import "./App.css";

function App() {
  const {data, isLoading, errorMessage} = useOpenWeather({
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
        unitsLabels={{temperature: "F", windSpeed: "M/h"}}
        showForecast
      />
    </div>
  );
}

export default App;
