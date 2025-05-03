import React from "react"
import ReactApexChart from "react-apexcharts"

const barchart = ({datacount}) => {
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
      },

      colors: ["#a9cd98"],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [
          "Punjab",
          "Sindh",
          "Balochistan",
          "KPK",
          "Gilgit Biltistan"
        ],
      },
    },
  }

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
  )
}

export default barchart;