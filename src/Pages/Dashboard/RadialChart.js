import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const series = [62, 72, 85]; // Percentages
  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#0ab39c", "#4aa3ff", "#5664d2"],
    xaxis: {
      categories: ["Government", "Accredited", "Certified Trainers"],
      labels: {
        style: { fontSize: '14px' }
      },
    },
    yaxis: {
      title: {
        text: "Count",
      },
      min: 0,
      forceNiceScale: true,
      labels: {
        stepSize: 10,
        formatter: function(val) { return Math.round(val); }
      }
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      y: {
        formatter: function(val) { return val + " institutes"; }
      }
    }
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[{ name: "Institutes", data: series }]}
        type="bar"
        height={350}
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default RadialChart;