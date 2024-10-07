"use client";

import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import WeatherChart from "./WeatherChart";
import styles from "../../styles/weather.module.css";

const API_KEY = "1d64d398eb194396a0e164855240510";

const Weather = () => {
  const [location, setLocation] = useState("sao paulo");
  const [data, setData] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=5&lang=pt&key=${API_KEY}`
      );
      setData(response.data);
      setForecast(response.data.forecast);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocation(event.target.value);
  }

  function handleSearchClick() {
    fetchData();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

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
      <div className={styles.input_container}>
        <input
          className={styles.input_form}
          type="text"
          value={location}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite o local"
        />
        <button className={styles.btn_form} onClick={handleSearchClick}>
          Buscar
        </button>
      </div>
      {loading ? (
        <p>Carregando dados climáticos...</p>
      ) : (
        data && (
          <div className={styles.card}>
            <div className={styles.card_weather}>
              <h2>Previsão para hoje</h2>
              <p>
                {data.location.name}, {data.location.country}
              </p>
              <div className={styles.temp_container}>
                <img
                  className={styles.card_img}
                  src={data.current.condition.icon}
                  alt={data.current.condition.text}
                />
                <p className={styles.card_temp_c}>{data.current.temp_c} ºC</p>
              </div>

              <p>{getFormattedDateTime()}</p>

              <div className={styles.card_container}>
                <div className={styles.card_model}>
                  <strong>Vento:</strong> {data.current.wind_kph} km/h
                </div>
                <div className={styles.card_model}>
                  <strong>Umidade:</strong> {data.current.humidity}%
                </div>
                <div className={styles.card_model}>
                  <strong>Cloud:</strong> {data.current.cloud}%
                </div>
              </div>
            </div>
            {forecast && <Forecast forecastData={forecast} />}
          </div>
        )
      )}
      <div className={styles.chart_container}>
        {forecast && <WeatherChart forecast={forecast} />}
      </div>
    </section>
  );
};

export default Weather;
