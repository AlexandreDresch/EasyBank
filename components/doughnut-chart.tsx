"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts }: DoughnutChartProps) {
  const accountNames = accounts.map((account) => account.name);
  const balances = accounts.map((account) => account.currentBalance);

  const data = {
    datasets: [
      {
        data: balances,
        label: "Amount",
        backgroundColor: ["#00D4D5", "#009D9E", "#BFFCFB"],
      },
    ],
    labels: accountNames,
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
