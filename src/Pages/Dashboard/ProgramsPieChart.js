import React from 'react';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const chartData = {
  series: [
    { name: 'Programs', data: [70, 30] },
  ],
  options: {
    chart: { type: 'pie', toolbar: { show: false } },
    labels: ['Govt Funded', 'Private Funded'],
    colors: ['#3d8ef8', '#f1b44c'],
    legend: { show: true, position: 'bottom' },
    dataLabels: { enabled: true },
  },
  type: 'pie',
};

const ProgramsPieChart = ({ cardClassName = '' }) => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Programs Distribution</CardTitle>
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

export default ProgramsPieChart;