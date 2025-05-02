import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const series = [62, 72, 85]; // Percentages
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "45%",
        },
        track: {
          show: true,
          strokeWidth: "70%",
          margin: 12,
        },
        dataLabels: {
          name: {
            fontSize: "27px",
          },
          value: {
            fontSize: "20px",
          },
          total: {
            show: true,
            label: "Total Institutes",
            formatter: function (w) {
              return "1,234";
            },
          },
        },
      },
    },
    labels: ["Government", "Accredited", "Certified Trainers"],
    colors: ["#0ab39c", "#4aa3ff", "#5664d2"],
  };
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="350"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default RadialChart;