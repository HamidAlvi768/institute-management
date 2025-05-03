import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartViews = {
  'Top Trades': {
    series: [
      { name: 'Enrollments', data: [150, 130, 110, 90, 70] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['Web Development', 'Nursing', 'Auto Mechanics', 'Fashion Design', 'Electrical'] },
      colors: ['#f1b44c'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
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
  'City-wise': {
    series: [
      { name: 'Trades', data: [90, 75, 60, 45, 30] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'] },
      colors: ['#34c38f'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
};

const ProgramsTradesChart = ({ cardClassName = '' }) => {
  const [activeTab, setActiveTab] = useState('Top Trades');

  const chartData = chartViews[activeTab] || chartViews['Sector-wise'];

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Trades</CardTitle>
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
                height={350}
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