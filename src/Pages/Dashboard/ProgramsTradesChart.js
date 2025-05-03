import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartViews = {
  'Sector-wise': {
    series: [
      { name: 'Programs', data: [120, 100, 80, 60, 40] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['IT', 'Healthcare', 'Construction', 'Textile', 'Automotive'] },
      colors: ['#3d8ef8'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
  'Level-wise': {
    series: [
      { name: 'Courses', data: [60, 90, 50] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['Beginner', 'Intermediate', 'Advanced'] },
      colors: ['#11c46e'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
  'Top Trades': {
    series: [
      { name: 'Enrollments', data: [90, 80, 70, 60, 50] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['Electrician', 'Welder', 'Plumber', 'Mechanic', 'Carpenter'] },
      colors: ['#f1b44c'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
};

const ProgramsTradesChart = ({ cardClassName = '' }) => {
  const [activeTab, setActiveTab] = useState('Sector-wise');

  const chartData = chartViews[activeTab];

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Programs & Trades</CardTitle>
            </div>
            <Nav tabs className="mb-3">
              {Object.keys(chartViews).map((tab) => (
                <NavItem key={tab}>
                  <NavLink
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                    style={{ cursor: 'pointer' }}
                  >
                    {tab}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type={chartData.type}
                height={320}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ProgramsTradesChart; 