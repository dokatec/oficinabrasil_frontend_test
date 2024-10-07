import React from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "../../styles/weatherChart.module.css";
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

interface WeatherChartProps {
  forecast: any;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ forecast }) => {
  function getFormattedDate(date: string) {
    const options = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
  }

  const chartData = {
    labels: forecast
      ? forecast.forecastday[0].hour.map((hour: { time: any }) =>
          getFormattedDate(hour.time)
        )
      : [],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: forecast
          ? forecast.forecastday[0].hour.map((hour: any) => hour.temp_c)
          : [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "#63689d",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Previsão Horária da Temperatura",
      },
    },
  };

  return (
    <div className={styles.chart_card}>
      {forecast ? (
        <div>
          <h2>Previsão Horária para Hoje</h2>
          <Bar
            data={chartData}
            options={options}
            className={styles.chart_bar}
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherChart;
