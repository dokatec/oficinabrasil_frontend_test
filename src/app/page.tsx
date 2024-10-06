"use client";
import React from "react";
import Weather from "./components/weather/weather/weather";
import Forecast from "./components/weather/forecast/forecast";
import Weather_hours from "./components/weather/weather_hours/weather_hours";
import Header from "./components/header/header";

const App = () => {
  return (
    <div>
      <Header name="DASHBOARD" />
      <main>
        <Weather />
        <div className="main-container">
          <Forecast />
          <Weather_hours />
        </div>
      </main>
    </div>
  );
};

export default App;
