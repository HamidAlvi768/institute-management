import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

// Error Boundary for catching chart rendering issues
class ChartErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-danger">Error rendering chart. Check console for details.</div>;
    }
    return this.props.children;
  }
}

const chartData = {
  series: [50, 35, 25], // Simplified series for pie chart
  options: {
    chart: {
      type: 'pie',
      toolbar: { show: false },
      width: '100%', // Ensure chart takes full container width
      height: 320,
    },
    labels: ['Govt Funded', 'Private Funded', 'NGO Funded'],
    colors: ['#1b5642', '#a9cd98', '#f1b44c'],
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      theme: 'dark',
      style: {
        color: '#fff'
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' },
        },
      },
    ],
  },
};

const ProgramsPieChart = ({ cardClassName = '' }) => {
  // Log chart data for debugging
  console.log('Chart Data:', chartData);

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Programs Distribution</CardTitle>
            </div>
            <div style={{ minHeight: '320px' }}> {/* Ensure container has minimum height */}
              <ChartErrorBoundary>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="pie"
                  height={395}
                  className="apex-charts"
                />
              </ChartErrorBoundary>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ProgramsPieChart;