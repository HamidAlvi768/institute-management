import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

// Dummy data for each view
const chartViews = {
  'Year-wise': {
    series: [
      { name: 'Enrollments', data: [120, 150, 170, 140, 180] },
    ],
    options: {
      chart: { type: 'line', toolbar: { show: false } },
      xaxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
      colors: ['#3d8ef8'],
      dataLabels: { enabled: true },
      stroke: { curve: 'smooth', width: 3 },
    },
    type: 'line',
  },
  'Duration': {
    series: [
      { name: 'Short-term', data: [60, 80, 90, 70, 100] },
      { name: 'Long-term', data: [40, 60, 80, 70, 80] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
      colors: ['#11c46e', '#f46a6a'],
      dataLabels: { enabled: false },
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
    },
    type: 'bar',
  },
  'Sector': {
    series: [
      { name: 'Enrollments', data: [200, 150, 120, 100, 80] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['IT', 'Healthcare', 'Construction', 'Textile', 'Automotive'] },
      colors: ['#34c38f'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
    },
    type: 'bar',
  },
  'Gender': {
    series: [45, 55],
    options: {
      labels: ['Male', 'Female'],
      colors: ['#3d8ef8', '#f46a6a'],
      legend: { show: true, position: 'bottom' },
    },
    type: 'pie',
  },
  'Board': {
    series: [70, 30],
    options: {
      labels: ['NAVTTC', 'Other Boards'],
      colors: ['#11c46e', '#f1b44c'],
      legend: { show: true, position: 'bottom' },
    },
    type: 'donut',
  },
};

const EnrollmentAnalyticsChart = ({ cardClassName = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Year-wise');

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (view) => setSelectedView(view);

  const chartData = chartViews[selectedView];

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Enrollment Analytics</CardTitle>
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

export default EnrollmentAnalyticsChart; 