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
import CombinedProgramsChart from "./CombinedProgramsChart";
import CertificationTrainersChart from "./CertificationTrainersChart";
import ProgramsTradesChart from "./ProgramsTradesChart";

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

          {/* New Dashboard Charts: 3 in one row */}
          <Row>
            <InstituteMetricsChart />
            <EnrollmentAnalyticsChart />
            <EmploymentOutcomesChart />
          </Row>
          <Row>
            <CombinedProgramsChart />
            <ProgramsTradesChart />
            <CertificationTrainersChart />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
