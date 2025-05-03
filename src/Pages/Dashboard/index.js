import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import EnrollmentAnalyticsChart from "./EnrollmentAnalyticsChart";
import EmploymentOutcomesChart from "./EmploymentOutcomesChart";
import InstituteMetricsChart from "./InstituteMetricsChart";
import ProgramsTradesChart from "./ProgramsTradesChart";
import CertificationTrainersChart from "./CertificationTrainersChart";

import { Row, Container, Col, Card, CardBody, CardTitle } from "reactstrap";

const Dashboard = () => {
  document.title = "Dashboard | Navttc - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* User Panel Charts */}
          <UsePanel />

          <Row>
            {/* Overview Chart */}
            <OverView />
            {/* Social Source Chart */}
            <SocialSource />
          </Row>

          <Row>
            {/* Parent Card for Course Metrics Section */}
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle tag="h4">Course & Training Metrics</CardTitle>
                  <Row>
                    <OrderStatus cardClassName="transparent-card" />
                    <Notifications cardClassName="transparent-card" />
                    <RevenueByLocation cardClassName="transparent-card" />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* New Dashboard Charts: 3 in one row */}
          <Row>
            <EnrollmentAnalyticsChart />
            <EmploymentOutcomesChart />
            <InstituteMetricsChart />
          </Row>
          <Row>
            <ProgramsTradesChart />
            <CertificationTrainersChart />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
