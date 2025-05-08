import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const series = [
  { name: 'National', data: [50, 40, 30, 20, 10] },
  { name: 'International', data: [10, 20, 10, 10, 5] },
];
const options = {
  chart: { type: 'bar', stacked: true, toolbar: { show: false }, foreColor: '#ffffff' },
  xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
  colors: ['#1b5642', '#a9cd98'],
  plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
  dataLabels: { enabled: false },
  legend: { show: true, position: 'bottom' },
};

const InstituteAccreditationChart = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Institute Accreditation</CardTitle>
      <ReactApexChart options={options} series={series} type="bar" height={390} className="apex-charts" />
    </CardBody>
  </Card>
);

export default InstituteAccreditationChart; 