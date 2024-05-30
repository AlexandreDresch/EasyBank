"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DoughnutChart({ accounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        data: [1250, 2500, 3750],
        label: "Amount",
        backgroundColor: ["#00D4D5", "#009D9E", "#BFFCFB"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
