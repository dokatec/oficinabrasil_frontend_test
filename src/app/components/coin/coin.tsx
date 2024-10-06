"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar, Line, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import styles from "./coin.module.css";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, Colors);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  type: "Bar",
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Coins = () => {
  const [data, setData] = useState([]);
  const coin = "bitcoin";

  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=" +
        coin +
        "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=7"
    );
    const data = await response.json();
    const array = Object.entries(data).map(([key, value]) => ({
      name: key,
      ...value,
    }));
    setData(array);
    console.log(array);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const configChart = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Preço (USD)",
        data: data.map((item) => item.usd),
        backgroundColor: ["lightGreen"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Market Cap (USD)",
        data: data.map((item) => item.usd_market_cap),
        backgroundColor: ["lightBlue"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Volume 24h (USD)",
        data: data.map((item) => item.usd_24h_vol),
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Change 24h (USD)",
        data: data.map((item) => item.usd_24h_change),
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
      {
        label: "Last Updated At (USD)",
        data: data.map((item) => item.last_updated_at),
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
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
