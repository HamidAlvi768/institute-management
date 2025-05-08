import React from 'react';
import Chart from 'react-apexcharts';

const CourseChart = () => {
  const series = [
    {
      name: 'Students',
      data: [500, 300, 200]
    },
    {
      name: 'Certified',
      data: [400, 200, 150]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['IT', 'Fashion', 'Nursing']
    },
    yaxis: {
      title: {
        text: 'Number of Students'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} students`
      }
    }
  };

  return (
    <Chart options={options} series={series} type="bar" height={350} />
  );
};

export default CourseChart;
