import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartViews = {
  'Overall': {
    series: [60, 20, 10, 10],
    options: {
      labels: ['Employed', 'Unemployed', 'Overseas', 'Self-Employed'],
      colors: ['#11c46e', '#f46a6a', '#3d8ef8', '#f1b44c'],
      legend: { show: true, position: 'bottom' },
      dataLabels: { enabled: true },
    },
    type: 'donut',
  },
  'By Sector': {
    series: [40, 30, 20, 10],
    options: {
      labels: ['IT', 'Healthcare', 'Construction', 'Textile'],
      colors: ['#3d8ef8', '#34c38f', '#f46a6a', '#f1b44c'],
      legend: { show: true, position: 'bottom' },
      dataLabels: { enabled: true },
    },
    type: 'donut',
  },
  'By Region': {
    series: [35, 25, 20, 10, 10],
    options: {
      labels: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'],
      colors: ['#3d8ef8', '#f1b44c', '#11c46e', '#f46a6a', '#34c38f'],
      legend: { show: true, position: 'bottom' },
      dataLabels: { enabled: true },
    },
    type: 'donut',
  },
};

const EmploymentOutcomesChart = ({ cardClassName = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Overall');

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (view) => setSelectedView(view);

  const chartData = chartViews[selectedView];

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Employment Outcomes</CardTitle>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="sm">
                <DropdownToggle caret color="light">
                  {selectedView}
                </DropdownToggle>
                <DropdownMenu>
                  {Object.keys(chartViews).map((view) => (
                    <DropdownItem key={view} onClick={() => handleSelect(view)}>
                      {view}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
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

export default EmploymentOutcomesChart; 