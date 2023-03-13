import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
    },
  },
};

function BaseInfo() {
  const labels = [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Imported",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
        backgroundColor: "rgba(12, 11, 11, 0.5)",
      },
      {
        label: "Exported",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
        backgroundColor: "rgba(250, 0, 33, 0.5)",
      },
    ],
  };
  return (
    <div style={{ height: "75vh", width: "100%", margin: 0 }}>
      <h1 style={{ fontSize: "2.5rem" }}>
        Lbs per million of general merchandise per Month
      </h1>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BaseInfo;
