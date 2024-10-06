"use client";

import React, { useState, useEffect } from "react";
import styles from "./weather.module.css";

import axios from "axios";

const API_KEY = "1d64d398eb194396a0e164855240510"; // Encapsulate API key

const Weather = () => {
  const [data, setData] = useState(null); // Set initial state to null for loading indication

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?q=sao%20paulo&lang=-&key=${API_KEY}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Consider adding error handling UI or retry logic
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getFormattedDateTime() {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  }

  return (
    <section className={styles.card_element}>
      {data ? (
        <div className={styles.card}>
          {data.location.name}, {data.location.country}
          <img
            className={styles.card_img}
            src={data.current.condition.icon}
            alt=""
          />
          <p>{getFormattedDateTime()}</p>
          <p className={styles.card_temp_c}>{data.current.temp_c} ºC</p>
          <div className={styles.card_container}>
            <div className={styles.card_model}>
              <strong>Vento:</strong> {data.current.wind_kph}%
            </div>
            <div className={styles.card_model}>
              <strong>Umidade:</strong> {data.current.humidity}%
            </div>
            <div className={styles.card_model}>
              <strong>Cloud:</strong> {data.current.cloud}%
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p> // Display loading message while fetching
      )}
    </section>
  );
};

export default Weather;
