"use client";
import React from "react";
import styles from "../../styles/Coin.module.css";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  labels: string[];
  data: {
    price: number[];
    marketCap: number[];
    volume: number[];
    change24h: number[];
    lastUpdated: number[];
  };
}

const ChartComponent: React.FC<ChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Preço (USD)",
        data: data.price,
        backgroundColor: "lightGreen",
      },
      {
        label: "Market Cap (USD)",
        data: data.marketCap,
        backgroundColor: "lightBlue",
      },
      {
        label: "Volume 24h (USD)",
        data: data.volume,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Change 24h (USD)",
        data: data.change24h,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
      },
      {
        label: "Last Updated At",
        data: data.lastUpdated,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dados das Criptomoedas",
      },
    },
  };

  return (
    <Pie
      style={{ width: "1000px", height: "500px" }}
      data={chartData}
      options={options}
    />
  );
};

export default ChartComponent;
