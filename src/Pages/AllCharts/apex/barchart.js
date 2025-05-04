import React from "react";
import ReactApexChart from "react-apexcharts";

const barchart = ({ datacount }) => {
  const barchartData = {
    series: [
      {
        data: datacount,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        enabled: true,
        style: {
          colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'], // Different colors for each bar
        },
      },
      colors: ['#1b5642', '#a9cd98', '#f1b44c'],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [
          "Punjab",
          "Sindh",
          "Balochistan",
          "KPK",
          "Gilgit Biltistan",
        ],
        labels: {
          style: {
            colors: '#000000', // Text color for x-axis labels
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#000000', // Text color for y-axis labels
          },
        },
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={barchartData.options}
        series={barchartData.series}
        type="bar"
        height="400"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default barchart;