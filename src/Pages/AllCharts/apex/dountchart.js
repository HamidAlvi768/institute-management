import React from "react";
import ReactApexChart from "react-apexcharts";

const dountchartData = {
  series: [25.6, 32.0, 23.8, 9.9],
  options: {
    labels: ["IT", "Healthcare", "Finance", "Manufacturing"],
    colors: ['#1b5642', '#a9cd98', '#4b8c6f', '#7ab391'],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
}



const dountchart = () => {
  return (
    <React.Fragment>
      <ReactApexChart
        options={dountchartData.options}
        series={dountchartData.series}
        type="donut"
        height="390"
        className="apex-charts"
      />
    </React.Fragment>
  )
}

export default dountchart;
