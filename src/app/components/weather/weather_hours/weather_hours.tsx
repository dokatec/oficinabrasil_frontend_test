`use client`;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./weather_hours.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_KEY = "1d64d398eb194396a0e164855240510";

export default function Page() {
  const [forecast, setForecast] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=sao%20paulo&days=1&key=${API_KEY}`
      );
      setForecast(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getFormattedDate(date: any) {
    const options = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
  }

  const chartData = {
    labels: forecast
      ? forecast.forecast.forecastday[0].hour.map((hour: { time: any }) =>
          getFormattedDate(hour.time)
        )
      : [],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: forecast
          ? forecast.forecast.forecastday[0].hour.map(
              (hour: any) => hour.temp_c
            )
          : [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Previsão Horária da Temperatura",
      },
    },
  };

  return (
    <div className={styles.div}>
      {forecast ? (
        <div>
          <h2>Previsão Horária para Hoje</h2>
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
