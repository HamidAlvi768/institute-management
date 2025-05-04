import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartViews = {
  'Certifications': {
    series: [65, 35],
    options: {
      labels: ['National', 'International'],
      colors: ['#1b5642', '#a9cd98', '#f1b44c'],
      legend: { show: true, position: 'bottom' },
      dataLabels: { enabled: true },
    },
    type: 'pie',
  },
  'Trainers': {
    series: [80], // 80% Certified
    options: {
      labels: ['Certified'],
      colors: ['#11c46e'],
      plotOptions: {
        radialBar: {
          hollow: { size: '70%' },
          dataLabels: {
            name: { show: true },
            value: { show: true, formatter: (val) => `${val}%` },
          },
        },
      },
      dataLabels: { enabled: true },
    },
    type: 'radialBar',
  },
};

const CertificationTrainersChart = ({ cardClassName = '', columnSize = 4 }) => {
  const [activeTab, setActiveTab] = useState('Certifications');

  const chartData = chartViews[activeTab];

  return (
    <React.Fragment>
      <Col xl={columnSize}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Certification & Trainers</CardTitle>
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
                height={330}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CertificationTrainersChart;