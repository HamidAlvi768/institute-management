import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const series = [
  { name: 'Govt', data: [30, 20, 25, 15, 10] },
  { name: 'Private', data: [10, 20, 35, 55, 75] },
];
const options = {
  chart: { type: 'bar', stacked: true, toolbar: { show: false }, foreColor: '#ffffff' },
  xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
  colors: ['#1b5642', '#a9cd98'],
  plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
  dataLabels: { enabled: false },
  legend: { show: true, position: 'bottom' },
};

const InstituteOwnershipChart = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Institute Ownership</CardTitle>
      <ReactApexChart options={options} series={series} type="bar" height={390} className="apex-charts" />
    </CardBody>
  </Card>
);

export default InstituteOwnershipChart; 