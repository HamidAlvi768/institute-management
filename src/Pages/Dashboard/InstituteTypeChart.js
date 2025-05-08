import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const series = [
  { name: 'Vocational', data: [40, 30, 20, 10, 5] },
  { name: 'Technical', data: [30, 40, 30, 20, 10] },
  { name: 'Professional', data: [30, 30, 50, 70, 85] },
];
const options = {
  chart: { type: 'bar', stacked: true, toolbar: { show: false }, foreColor: '#ffffff' },
  xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
  colors: ['#1b5642', '#a9cd98', '#f1b44c'],
  plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
  dataLabels: { enabled: false },
  legend: { show: true, position: 'bottom' },
};

const InstituteTypeChart = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Institute Type</CardTitle>
      <ReactApexChart options={options} series={series} type="bar" height={390} className="apex-charts" />
    </CardBody>
  </Card>
);

export default InstituteTypeChart; 