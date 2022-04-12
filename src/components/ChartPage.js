import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function ChartPage({ charData }) {
  const data = {
    labels: [...charData.map((index) => index.date.substring(0, 10))],
    datasets: [
      {
        label: charData[0] && charData[0].product[0].name,
        data: [...charData.map((index) => index.amount)],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div id="rightSide">
      <Line options={options} data={data} width="100px" height="60px" />
    </div>
  );
}
