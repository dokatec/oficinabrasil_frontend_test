"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar, Line, Bubble, Doughnut } from "react-chartjs-2";
import axios from "axios";
import styles from "./coin.module.css";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  type: "line",
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Coins = () => {
  const [platforms, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const configChart = {
    labels: platforms.map((platform) => platform[0].id),
    datasets: [
      {
        label: "CriptMoeda",
        data: platforms.map((platform) => platform.id),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className={styles.card_element}>
      <div className={styles.card}>
        <Bar options={options} data={configChart} />
      </div>
    </section>
  );
};

export default Coins;
