import { Weather } from "../Weather";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Weather />

      <div>
        We are using Node.js <span id="node-version"></span>, Chromium{" "}
        <span id="chrome-version"></span>, and Electron{" "}
        <span id="electron-version"></span>
      </div>
    </div>
  );
};
