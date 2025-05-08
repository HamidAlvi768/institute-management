import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const series = [
  { name: 'Registered', data: [80, 60, 70, 50, 40] },
  { name: 'Non-Registered', data: [20, 40, 30, 50, 60] },
];
const options = {
  chart: { type: 'bar', stacked: true, toolbar: { show: false }, foreColor: '#ffffff' },
  xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
  colors: ['#1b5642', '#a9cd98'],
  plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
  dataLabels: {
    enabled: true,
    style: { colors: ['#ffffff', '#000000'] }
  },
  legend: { show: true, position: 'bottom' },
};

const InstituteRegistrationChart = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Institute Registration</CardTitle>
      <ReactApexChart options={options} series={series} type="bar" height={390} className="apex-charts" />
    </CardBody>
  </Card>
);

export default InstituteRegistrationChart; 