import React from "react";
import ReactApexChart from "react-apexcharts";

const LineColumnAreaData = {
  series: [
    {
      name: "New Registrations",
      type: "column",
      data: [15, 22, 18, 25, 32, 28, 35, 40, 38, 45, 42, 50],
    },
    {
      name: "Accredited Institutes",
      type: "area",
      data: [45, 55, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
    },
    {
      name: "Avg. Trainers/Institute",
      type: "line",
      data: [8, 9, 8.5, 9.2, 9.5, 10, 10.5, 11, 11.2, 11.5, 11.8, 12],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 1, 1],
      dashArray: [0, 0, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: { columnWidth: "18%" },
    },
    legend: { show: false },
    colors: ["#0ab39c", "rgba(212, 218, 221, 0.18)", "#f94d63"],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
      },
    },
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    markers: { size: 0 },
    xaxis: { type: "category" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y, { seriesIndex }) {
          if(seriesIndex === 2) return `${y.toFixed(1)} trainers`;
          return y !== undefined ? `${y} institutes` : "";
        },
      },
    },
    grid: { borderColor: "#f1f1f1" },
  },
};

const LineColumnArea = () => {
  return (
    <ReactApexChart
      options={LineColumnAreaData.options}
      series={LineColumnAreaData.series}
      type="line"
      height={350}
      className="apex-charts"
    />
  );
};

export default LineColumnArea;