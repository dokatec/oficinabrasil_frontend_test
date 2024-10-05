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

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  type: "bar",
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DemoComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ypNzPlbsiKYnuYA5ANKk0FOGKXFTgHWP"
        );
        setData(response.data.results);
        console.log(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const noticias = data.map((item) => item.title);

  const configChart = {
    labels: noticias,
    datasets: [
      {
        label: "CriptMoeda",
        data: [10, 20, 30],
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

  return <Bar options={options} data={configChart} />;
};

export default DemoComponent;
