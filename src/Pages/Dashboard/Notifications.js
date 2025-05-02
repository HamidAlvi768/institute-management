import React from "react";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

//SimpleBar
import SimpleBar from "simplebar-react";


import { Card, CardBody, CardTitle, Col } from "reactstrap";

import { NotificationsData } from "../../CommonData/Data/index";

const Notifications = () => {
  // Prepare data for the bar chart
  const categories = NotificationsData.map(item => item.name);
  // For demo, each notification is counted as 1 (since there are only 3)
  const data = NotificationsData.map(() => 1);
  const barOptions = {
    chart: {
      toolbar: { show: false },
    },
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
    colors: ["#34c38f"],
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
        formatter: function(val) { return val + " notification(s)"; }
      }
    }
  };
  const barSeries = [{ name: "Notifications", data }];
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle>Notifications</CardTitle>
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
