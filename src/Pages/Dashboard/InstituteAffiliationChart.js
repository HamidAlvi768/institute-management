import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const series = [
  {
    name: 'Affiliated Institutes',
    data: [120, 90, 75, 60, 50, 40], // Dummy data for each body
  },
];
const options = {
  chart: { type: 'bar', toolbar: { show: false }, foreColor: '#ffffff' },
  xaxis: { categories: ['NAVTTC', 'PBTE', 'SBTE', 'KBTE', 'PVTC', 'PCDA'] },
  colors: ['#1b5642'],
  plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
  dataLabels: { enabled: true },
  legend: { show: false },
};

const InstituteAffiliationChart = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Affiliated Institutes by Body</CardTitle>
      <ReactApexChart options={options} series={series} type="bar" height={390} className="apex-charts" />
    </CardBody>
  </Card>
);

export default InstituteAffiliationChart; 