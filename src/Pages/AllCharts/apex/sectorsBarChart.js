import React from "react";
import ReactApexChart from "react-apexcharts";

const SectorsBarChart = ({ yearData }) => {
  // Default values if no props are passed or if props are not in expected format
  const defaultData = {
    IT: [25, 18, 15, 10],
    Healthcare: [22, 15, 12, 8],
    Finance: [18, 12, 10, 6],
    Manufacturing: [15, 10, 8, 5]
  };
  
  // Safely use yearData if it exists and has the correct structure, otherwise use defaults
  const sectorData = yearData && typeof yearData === 'object' && !Array.isArray(yearData) 
    ? yearData 
    : defaultData;
  
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
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
        text: "Provinces",
      },
    },
    yaxis: {
      title: {
        text: "Number of Institutes",
      },
      labels: {
        formatter: function (value) {
          return Math.round(value);
        }
      }
    },
    colors: ["rgb(61, 142, 248)", "rgb(17, 196, 110)", "#f1b44c", "#f46a6a"],
    legend: {
      position: "right",
      verticalAlign: "middle",
      offsetY: 15,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " institutes";
        }
      }
    },
  };

  // Ensure we have arrays for each sector, even if data is malformed
  const getSectorData = (sectorName) => {
    return (sectorData[sectorName] && Array.isArray(sectorData[sectorName])) 
      ? sectorData[sectorName] 
      : [0, 0, 0, 0];
  };

  const series = [
    {
      name: "IT",
      data: getSectorData("IT"),
    },
    {
      name: "Healthcare",
      data: getSectorData("Healthcare"),
    },
    {
      name: "Finance",
      data: getSectorData("Finance"),
    },
    {
      name: "Manufacturing",
      data: getSectorData("Manufacturing"),
    },
  ];

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="390"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default SectorsBarChart;
