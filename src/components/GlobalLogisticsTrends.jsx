import React, { useRef } from "react";
//charts
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const doughnutData = {
  labels: ["Small", "Large"],
  datasets: [
    {
      label: "Total Quantity",
      data: [99606, 76062],
      backgroundColor: ["rgb(255, 0, 55)", "rgba(0, 0, 0, 0.966)"],
      borderColor: ["rgba(255, 99, 132, 1)", "#ffffff"],
      borderWidth: 1,
    },
  ],
};

//Bar Chart
const labels = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];
const labels2 = [
  "La Rochelle Gifts",
  "Muscle Machine Inc",
  "Australian Collectors, Co.",
  "Mini Gifts Inc",
  "Euro Shopping Channel",
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

const importedExportedData = {
  labels,
  datasets: [
    {
      label: "MSRP    Vs",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: "rgba(12, 11, 11, 0.5)",
    },
    {
      label: "Real Price",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: "rgba(250, 0, 33, 0.5)",
    },
  ],
};

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Top 5 Customers by Total Shipment by 100 thousand",
    },
  },
};

const lineData = {
  labels: [
    "La Rochelle Gifts",
    "Muscle Machine Inc",
    "Australian Collectors, Co.",
    "Mini Gifts Inc",
    "Euro Shopping Channel",
  ],
  datasets: [
    {
      label: "Small",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(12, 11, 11, 0.5)",
    },
    {
      label: "Large",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(250, 0, 33, 0.5)",
    },
  ],
};

function GlobalLogisticsTrends() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{ width: "60vw" }}>
          <Grid item xs={5}>
            <div
              style={{
                width: "25rem",
                border: "2px solid rgb(0 0 0 / 31%)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h2>Total Order vs. Order by Deal Size</h2>
              <Doughnut data={doughnutData}></Doughnut>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div
              style={{
                width: "40rem",
                border: "2px solid rgb(0 0 0 / 31%)",
                padding: "10px",
                borderRadius: "10px",
                height: "24rem",
              }}
            >
              <Bar data={data} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                width: "32rem",
                border: "2px solid rgb(0 0 0 / 31%)",
                height: "17rem",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Bar data={importedExportedData} />
            </div>
          </Grid>
          <Grid item xl={6}>
            <div
              style={{
                width: "32rem",
                border: "2px solid rgb(0 0 0 / 31%)",
                height: "17rem",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Bar options={options} data={lineData} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GlobalLogisticsTrends;
