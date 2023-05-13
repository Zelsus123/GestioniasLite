import React from "react";
import { Box, useTheme } from "@mui/material";
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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const LineChart = () => {
  const theme = useTheme();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: true,
        text: "Ultimas Ventas",
        color: theme.palette.text.primary,
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme.palette.text.primary, // Cambiar aquí el color de las etiquetas del eje Y
        },
      },
      x: {
        ticks: {
          color: theme.palette.text.primary,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.main,
      },
    ],
  };
  return (
    <Box
      sx={{
        width: "49%",
        backgroundColor: "background.paper",
        height: "350px",
        mt: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "5px",
        boxShadow: 3,
      }}
    >
      <Box height="1%"></Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "98%",
          height: "90%",
          margin: "auto",
          borderRadius: "5px",
        }}
      >
        <Line
          options={options}
          data={data}
          style={{
            width: "100%",
            height: "100%",
            color: theme.palette.text.primary,
          }}
        />
      </Box>
    </Box>
  );
};
