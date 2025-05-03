import React from 'react';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartData = {
  'CBT Levels': {
    series: [
      { name: 'Programs', data: [45, 35, 20] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['Level 1', 'Level 2', 'Level 3'] },
      colors: ['#11c46e'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
      title: {
        text: 'CBT Levels',
        align: 'left',
        style: { fontSize: '14px', fontWeight: 600 }
      }
    },
    type: 'bar',
  },
  'Conventional Duration': {
    series: [
      { name: 'Programs', data: [60, 40, 30, 20] },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: { categories: ['3 Months', '6 Months', '1 Year', '2 Years'] },
      colors: ['#f1b44c'],
      plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
      dataLabels: { enabled: true },
      title: {
        text: 'Conventional Duration',
        align: 'left',
        style: { fontSize: '14px', fontWeight: 600 }
      }
    },
    type: 'bar',
  },
};

const CombinedProgramsChart = ({ cardClassName = '' }) => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Programs Distribution</CardTitle>
            </div>
            <div className="mb-4">
              <ReactApexChart
                options={chartData['CBT Levels'].options}
                series={chartData['CBT Levels'].series}
                type={chartData['CBT Levels'].type}
                height={160}
                className="apex-charts"
              />
            </div>
            <div>
              <ReactApexChart
                options={chartData['Conventional Duration'].options}
                series={chartData['Conventional Duration'].series}
                type={chartData['Conventional Duration'].type}
                height={160}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CombinedProgramsChart;