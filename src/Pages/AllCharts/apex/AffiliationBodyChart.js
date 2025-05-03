import React from "react";
import ReactApexChart from "react-apexcharts";

const AffiliationBodyChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Punjab",
        "Sindh",
        "KPK",
        "Balochistan",
      ],
      title: {
        text: "Number of Institutes",
      },
    },
    yaxis: {
      title: {
        text: "Provinces",
      },
    },
    colors: [
      "#3b82f6", // NAVTTC
      "#f59e0b", // PBTE
      "#10b981", // SBTE
      "#ef4444", // KBTE
      "#8b5cf6", // PVTC
      "#ec4899", // PCDA
    ],
    legend: {
      position: "right",
      verticalAlign: "middle",
      offsetY: 15,
    },
    title: {
      style: {
        fontWeight: 500,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " institutes";
        },
      },
    },
  };
  
  const series = [
    {
      name: "NAVTTC",
      data: [45, 32, 28, 21],
    },
    {
      name: "PBTE",
      data: [36, 0, 0, 0],
    },
    {
      name: "SBTE", 
      data: [0, 29, 0, 0],
    },
    {
      name: "KBTE",
      data: [0, 0, 25, 0],
    },
    {
      name: "PVTC",
      data: [32, 18, 15, 10],
    },
    {
      name: "PCDA",
      data: [15, 12, 9, 7],
    },
  ];

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="380"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default AffiliationBodyChart;
