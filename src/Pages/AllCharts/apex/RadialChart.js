import React from "react";
import ReactApexChart from "react-apexcharts";


const RadialChartData = {
  series: [44, 55, 67, 83],
  options: {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            },
          },
        },
      },
    },

    labels: ["Computer", "Tablet", "Laptop", "Mobile"],
    colors: ['#1b5642', '#a9cd98', '#f1b44c', '#ef4444'],
  },
}

const RadialChart = () => {
  return(
    <React.Fragment>
        <ReactApexChart
          options={RadialChartData.options}
          series={RadialChartData.series}
          type="radialBar"
          height="370"
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default RadialChart;
