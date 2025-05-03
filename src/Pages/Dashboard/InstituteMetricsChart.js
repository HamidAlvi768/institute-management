import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
// import MapPakistan from './MapPakistan'; // Uncomment if you have a map component

const chartViews = {
  'Registration': {
    series: [
      { name: 'Registered', data: [80, 60, 70, 50, 40] },
      { name: 'Non-Registered', data: [20, 40, 30, 50, 60] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#3d8ef8', '#f46a6a'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: true },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Accreditation': {
    series: [
      { name: 'National', data: [50, 40, 30, 20, 10] },
      { name: 'International', data: [10, 20, 10, 10, 5] }
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#11c46e', '#f1b44c'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Ownership': {
    series: [
      { name: 'Govt', data: [30, 20, 25, 15, 10] },
      { name: 'Private', data: [10, 20, 35, 55, 75] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#3d8ef8', '#f46a6a'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Type': {
    series: [
      { name: 'Vocational', data: [40, 30, 20, 10, 5] },
      { name: 'Technical', data: [30, 40, 30, 20, 10] },
      { name: 'Professional', data: [30, 30, 50, 70, 85] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#34c38f', '#3d8ef8', '#f1b44c'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
};

const InstituteMetricsChart = ({ cardClassName = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Registration');

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (view) => setSelectedView(view);

  const chartData = chartViews[selectedView];

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Institute Metrics</CardTitle>
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

export default InstituteMetricsChart;