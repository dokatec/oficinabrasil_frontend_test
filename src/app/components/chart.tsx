'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { useState } from 'react';
import { Bar, Line, Bubble, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  type: "bubble",
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};


 const DemoComponent = () => {

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = ["Red",'Blue','Yellow']
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'      
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  });

  return <Doughnut options={options} data={data}/>;
};

export default DemoComponent ;

