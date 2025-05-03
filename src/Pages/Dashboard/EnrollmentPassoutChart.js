import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartData = {
  series: [
    { name: 'Enrolled', data: [800, 950, 1100, 1250, 1400] },
    { name: 'Passout', data: [600, 750, 900, 1050, 1200] },
  ],
  options: {
    chart: { type: 'line', toolbar: { show: false } },
    xaxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
    colors: ['#3d8ef8', '#11c46e'],
    dataLabels: { enabled: true },
    stroke: { curve: 'smooth', width: 3 },
    legend: { show: true, position: 'bottom' },
  },
  type: 'line',
};

const EnrollmentPassoutChart = ({ cardClassName = '' }) => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Enrollment vs Passout</CardTitle>
            </div>
            <div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type={chartData.type}
                height={395}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default EnrollmentPassoutChart;