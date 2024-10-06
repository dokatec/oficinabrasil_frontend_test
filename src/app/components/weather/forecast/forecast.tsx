"use client";

import React, { useState, useEffect } from "react";
import styles from "./forecast.module.css";

import axios from "axios";

const API_KEY = "1d64d398eb194396a0e164855240510"; // Encapsulate API key

export default function Forecast() {
  const [forecast, setForecast] = useState(null); // Set initial state to null for loading indication

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=sao%20paulo&days=5&key=${API_KEY}`
      );
      setForecast(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Consider adding error handling UI or retry logic
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getFormattedDate(date) {
    const options = {
      weekday: "long",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
  }

  return (
    <section className={styles.card_element}>
      <div className={styles.card}>
        <h2>Previsão para 5 dias</h2>
        <div>
          {forecast ? (
            forecast.forecast.forecastday.map((day, index) => (
              <div key={index} className={styles.card_container}>
                <div className={styles.card_model}>
                  <p>{getFormattedDate(day.date)}</p>
                  <img src={day.day.condition.icon} alt="Weather Icon" />
                  <p>{day.day.condition.text}</p>
                  <p>
                    {day.day.maxtemp_c} ºC - {day.day.mintemp_c} ºC
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
    </section>
  );
}
