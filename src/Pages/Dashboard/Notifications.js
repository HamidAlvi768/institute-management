import React from "react";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

//SimpleBar
import SimpleBar from "simplebar-react";


import { Card, CardBody, CardTitle, Col } from "reactstrap";

import { NotificationsData } from "../../CommonData/Data/index";

const Notifications = ({ cardClassName = "" }) => {
  // Prepare data for the bar chart (CBT Levels)
  const categories = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
  const data = [10, 25, 40, 20, 5];
  const barOptions = {
    chart: {
      toolbar: { show: false },
    },
    legend: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#3d8ef8"],
    xaxis: {
      categories: categories,
      labels: {
        rotate: -45,
        style: { fontSize: '12px' }
      },
    },
    yaxis: {
      title: {
        text: "Count",
      },
      min: 0,
      forceNiceScale: true,
      labels: {
        stepSize: 1,
        formatter: function(val) { return Math.round(val); }
      }
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      y: {
        formatter: function(val) { return val + " students"; }
      }
    }
  };
  const barSeries = [{ name: "CBT Levels", data }];
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className={cardClassName} style={cardClassName === 'transparent-card' ? { background: 'transparent', boxShadow: 'none' } : {}}>
          <CardBody>
            <CardTitle>CBT Levels</CardTitle>
            <div className="pe-3">
              <ReactApexChart
                options={barOptions}
                series={barSeries}
                type="bar"
                height={287}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default Notifications;
